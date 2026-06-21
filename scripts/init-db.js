/**
 * scripts/init-db.js
 *
 * Khởi tạo database SQLite với đầy đủ schema và dữ liệu mẫu
 * Chuyển đổi từ MySQL (database.sql + web_login_db.sql) sang SQLite
 *
 * CÁCH CHẠY: node scripts/init-db.js
 */

const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

// Đường dẫn lưu database
const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'web_login.db');

// Xóa database cũ nếu tồn tại (để tạo lại từ đầu)
if (fs.existsSync(dbPath)) {
  fs.unlinkSync(dbPath);
  console.log('🗑️ Đã xóa database cũ:', dbPath);
}

const db = new Database(dbPath);

// Bật foreign keys và WAL mode
db.pragma('journal_mode = DELETE');
db.pragma('foreign_keys = ON');

console.log('🗄️ Đã tạo database SQLite mới tại:', dbPath);

// ============================================================
// TẠO CÁC BẢNG (Schema)
// ============================================================

db.exec(`
  -- Bảng users
  CREATE TABLE IF NOT EXISTS users (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    username   TEXT NOT NULL UNIQUE,
    email      TEXT NOT NULL UNIQUE,
    password   TEXT NOT NULL,
    role       TEXT NOT NULL DEFAULT 'user' CHECK(role IN ('admin', 'user')),
    is_locked  INTEGER DEFAULT 0 CHECK(is_locked IN (0, 1)),
    created_at TEXT DEFAULT (datetime('now', 'localtime'))
  );

  -- Bảng contents (flashcard nội dung)
  CREATE TABLE IF NOT EXISTS contents (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    title     TEXT NOT NULL,
    body      TEXT NOT NULL,
    type      TEXT DEFAULT 'flashcard',
    createdAt TEXT DEFAULT (datetime('now', 'localtime'))
  );

  -- Bảng comments (bình luận)
  CREATE TABLE IF NOT EXISTS comments (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    contentId TEXT NOT NULL,
    username  TEXT NOT NULL,
    email     TEXT,
    content   TEXT NOT NULL,
    rating    INTEGER DEFAULT 5 CHECK(rating >= 1 AND rating <= 5),
    createdAt TEXT DEFAULT (datetime('now', 'localtime'))
  );

  -- Bảng page_views (lượt xem trang - tổng hợp)
  CREATE TABLE IF NOT EXISTS page_views (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    page_url   TEXT NOT NULL,
    view_date  TEXT NOT NULL,
    view_count INTEGER DEFAULT 1,
    UNIQUE(page_url, view_date)
  );

  -- Bảng view_logs (log chi tiết lượt xem)
  CREATE TABLE IF NOT EXISTS view_logs (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    page_url   TEXT NOT NULL,
    visitor_id TEXT,
    user_id    INTEGER,
    visited_at TEXT DEFAULT (datetime('now', 'localtime'))
  );

  -- Bảng flashcard_collections (bộ sưu tập flashcard)
  CREATE TABLE IF NOT EXISTS flashcard_collections (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id    INTEGER NOT NULL,
    name       TEXT NOT NULL,
    status     TEXT DEFAULT 'Đang học',
    created_at TEXT DEFAULT (datetime('now', 'localtime')),
    updated_at TEXT DEFAULT (datetime('now', 'localtime')),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );

  -- Bảng flashcard_cards (thẻ flashcard trong bộ)
  CREATE TABLE IF NOT EXISTS flashcard_cards (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    collection_id INTEGER NOT NULL,
    term          TEXT NOT NULL,
    definition    TEXT NOT NULL,
    created_at    TEXT DEFAULT (datetime('now', 'localtime')),
    FOREIGN KEY (collection_id) REFERENCES flashcard_collections(id) ON DELETE CASCADE
  );

  -- Bảng feedback_replies (phản hồi của admin cho comment)
  CREATE TABLE IF NOT EXISTS feedback_replies (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    comment_id    INTEGER NOT NULL,
    admin_username TEXT NOT NULL,
    reply         TEXT NOT NULL,
    created_at    TEXT DEFAULT (datetime('now', 'localtime')),
    FOREIGN KEY (comment_id) REFERENCES comments(id) ON DELETE CASCADE
  );

  -- Bảng notifications (thông báo cho user)
  CREATE TABLE IF NOT EXISTS notifications (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id    INTEGER NOT NULL,
    title      TEXT NOT NULL,
    message    TEXT NOT NULL,
    type       TEXT DEFAULT 'info',
    is_read    INTEGER DEFAULT 0 CHECK(is_read IN (0, 1)),
    created_at TEXT DEFAULT (datetime('now', 'localtime')),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );
`);

console.log('✅ Đã tạo tất cả bảng thành công');

// ============================================================
// THÊM DỮ LIỆU MẪU (Seed Data)
// ============================================================

// --- users (4 users từ database.sql) ---
const insertUser = db.prepare(`
  INSERT INTO users (id, username, email, password, role, created_at)
  VALUES (?, ?, ?, ?, ?, ?)
`);

const usersData = [
  [11, 'ho',      'ho@gmail.com',       '$2b$10$12i/95PF43Ga3qJUUsYBUeveAbWSHIUeGEthgZw9ecaCgY1suiK1.',  'user',  '2026-06-08 14:13:49'],
  [12, 'lmđ',     'lmd@gmail.com',      '$2b$10$v1fuH5u8UcOLj4ClSrHMe.ASqIYR..FvYbknmwY8h/x7La8XzHAcy', 'user',  '2026-06-09 00:22:05'],
  [13, 'user',    'user@gmail.com',     '$2b$10$XEnX1gaaNMm6YpmaOE40Yu6MG93kFvg8PxPrzoFrbAc3INMjQkgMe', 'user',  '2026-06-09 01:52:34'],
  [14, 'admin',   'admin@test.com',     '$2b$10$bM8lXaU2vqdNPt8q7rzXLu/ym3nWDFSzChdEJ.uzR7rS1F5psq4GO', 'admin', '2026-06-13 14:03:58'],
];

const insertUsers = db.transaction(() => {
  for (const user of usersData) {
    insertUser.run(...user);
  }
});
insertUsers();
console.log(`✅ Đã thêm ${usersData.length} users`);

// --- contents (3 flashcards từ database.sql / web_login_db.sql) ---
const insertContent = db.prepare(`
  INSERT INTO contents (id, title, body, type, createdAt)
  VALUES (?, ?, ?, ?, ?)
`);

const contentsData = [
  [1, 'Động từ bất quy tắc - Go',    'Go - Went - Gone',                    'flashcard', '2026-06-09 01:42:19'],
  [2, 'Từ vựng gia đình',            'Father, Mother, Brother, Sister',     'flashcard', '2026-06-09 01:42:19'],
  [3, 'Thời tiết',                   'Sunny, Rainy, Cloudy, Windy',         'flashcard', '2026-06-09 01:42:19'],
];

const insertContents = db.transaction(() => {
  for (const content of contentsData) {
    insertContent.run(...content);
  }
});
insertContents();
console.log(`✅ Đã thêm ${contentsData.length} contents`);

// --- comments (4 comments từ database.sql, bổ sung email column) ---
const insertComment = db.prepare(`
  INSERT INTO comments (id, contentId, username, email, content, rating, createdAt)
  VALUES (?, ?, ?, ?, ?, ?, ?)
`);

const commentsData = [
  [1, '1', 'user1', null, 'Flashcard rất hay!',    5, '2026-06-09 01:42:19'],
  [2, '1', 'user2', null, 'Cần thêm ví dụ',        4, '2026-06-09 01:42:19'],
  [3, '2', 'user3', null, 'Giao diện đẹp!',        5, '2026-06-09 01:42:19'],
  [4, '1', 'admin', null, 'Test comment',           5, '2026-06-13 15:02:03'],
];

const insertComments = db.transaction(() => {
  for (const comment of commentsData) {
    insertComment.run(...comment);
  }
});
insertComments();
console.log(`✅ Đã thêm ${commentsData.length} comments`);

// ============================================================
// THÊM FLASHCARD COLLECTIONS & CARDS (dữ liệu mẫu cho thư viện)
// ============================================================

// Tạo 1 bộ sưu tập mẫu cho user "user" (id=13) với 3 thẻ từ contents
const insertCollection = db.prepare(`
  INSERT INTO flashcard_collections (id, user_id, name, status, created_at, updated_at)
  VALUES (?, ?, ?, ?, ?, ?)
`);

const insertCard = db.prepare(`
  INSERT INTO flashcard_cards (id, collection_id, term, definition, created_at)
  VALUES (?, ?, ?, ?, ?)
`);

const seedCollections = db.transaction(() => {
  // Collection 1: cho user "ho" (id=11)
  insertCollection.run(1, 11, 'Động từ bất quy tắc', 'Đang học', '2026-06-09 01:42:19', '2026-06-09 01:42:19');
  insertCard.run(1, 1, 'Go', 'Went - Gone', '2026-06-09 01:42:19');

  // Collection 2: cho user "user" (id=13)
  insertCollection.run(2, 13, 'Từ vựng gia đình', 'Đang học', '2026-06-09 01:42:19', '2026-06-09 01:42:19');
  insertCard.run(2, 2, 'Father', 'Cha', '2026-06-09 01:42:19');
  insertCard.run(3, 2, 'Mother', 'Mẹ', '2026-06-09 01:42:19');
  insertCard.run(4, 2, 'Brother', 'Anh/em trai', '2026-06-09 01:42:19');
  insertCard.run(5, 2, 'Sister', 'Chị/em gái', '2026-06-09 01:42:19');

  // Collection 3: cho user "user" (id=13)
  insertCollection.run(3, 13, 'Thời tiết', 'Đang học', '2026-06-09 01:42:19', '2026-06-09 01:42:19');
  insertCard.run(6, 3, 'Sunny', 'Nắng', '2026-06-09 01:42:19');
  insertCard.run(7, 3, 'Rainy', 'Mưa', '2026-06-09 01:42:19');
  insertCard.run(8, 3, 'Cloudy', 'Nhiều mây', '2026-06-09 01:42:19');
  insertCard.run(9, 3, 'Windy', 'Nhiều gió', '2026-06-09 01:42:19');
});
seedCollections();
console.log(`✅ Đã thêm 3 bộ flashcard mẫu vào thư viện`);

// Kiểm tra dữ liệu
console.log('\n📊 KIỂM TRA DỮ LIỆU:');
const tables = ['users', 'contents', 'comments', 'page_views', 'view_logs',
                'flashcard_collections', 'flashcard_cards', 'feedback_replies', 'notifications'];
for (const table of tables) {
  const row = db.prepare(`SELECT COUNT(*) as count FROM ${table}`).get();
  console.log(`   - ${table}: ${row.count} dòng`);
}

// Kiểm tra dữ liệu users cụ thể
console.log('\n👤 KIỂM TRA USERS:');
const users = db.prepare('SELECT id, username, email, role, created_at FROM users ORDER BY id').all();
for (const u of users) {
  console.log(`   [${u.id}] ${u.username} (${u.email}) - ${u.role} - ${u.created_at}`);
}

// Kiểm tra dữ liệu comments cụ thể
console.log('\n💬 KIỂM TRA COMMENTS:');
const comments = db.prepare('SELECT id, contentId, username, content, rating, createdAt FROM comments ORDER BY id').all();
for (const c of comments) {
  console.log(`   [${c.id}] contentId=${c.contentId} ${c.username}: "${c.content}" (${c.rating}⭐) - ${c.createdAt}`);
}

// Kiểm tra dữ liệu contents cụ thể
console.log('\n📝 KIỂM TRA CONTENTS:');
const contents = db.prepare('SELECT id, title, body, type, createdAt FROM contents ORDER BY id').all();
for (const c of contents) {
  console.log(`   [${c.id}] ${c.title} - ${c.body} - ${c.createdAt}`);
}

db.close();
console.log('\n🎉 Khởi tạo database SQLite thành công!');
