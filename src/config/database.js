/**
 * src/config/database.js
 *
 * SQLite connection wrapper dùng better-sqlite3
 * Giao diện tương thích với mysql2/promise (hỗ trợ db.execute() và db.query())
 *
 * Thay thế cho mysql2 cũ:
 *   const mysql = require('mysql2');
 *   const pool = mysql.createPool({...});
 *   const db = pool.promise();
 *   module.exports = db;
 */

const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

// Tạo thư mục data nếu chưa tồn tại
const dataDir = path.join(__dirname, '..', '..', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'web_login.db');

let db;
try {
  db = new Database(dbPath);
} catch (err) {
  console.error('❌ Không thể kết nối database SQLite:', err.message);
  process.exit(1);
}

// Tối ưu performance
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');
db.pragma('busy_timeout = 5000');

// Tạo trigger để mô phỏng ON UPDATE CURRENT_TIMESTAMP cho flashcard_collections
// (SQLite không hỗ trợ trực tiếp ON UPDATE trong column definition)
db.exec(`
  CREATE TRIGGER IF NOT EXISTS trg_flashcard_collections_updated_at
  AFTER UPDATE ON flashcard_collections
  FOR EACH ROW
  BEGIN
    UPDATE flashcard_collections SET updated_at = datetime('now', 'localtime') WHERE id = OLD.id;
  END
`);

// Migrate: thêm cột is_locked nếu chưa tồn tại
try {
  const columns = db.prepare("PRAGMA table_info('users')").all().map(c => c.name);
  if (!columns.includes('is_locked')) {
    db.exec(`ALTER TABLE users ADD COLUMN is_locked INTEGER DEFAULT 0 CHECK(is_locked IN (0, 1))`);
    console.log('✅ Đã thêm cột is_locked vào bảng users');
  }
} catch (err) {
  // Bỏ qua lỗi nếu không migrate được
  console.error('⚠️ Lỗi migrate is_locked:', err.message);
}

// === Wrapper tương thích mysql2/promise ===
// mysql2/promise.execute(sql, params) trả về [rows, fields]
// mysql2/promise.query(sql, params) trả về [rows, fields]

function isSelectSQL(sql) {
  const trimmed = sql.trim().toUpperCase();
  return trimmed.startsWith('SELECT') || trimmed.startsWith('WITH') || trimmed.startsWith('PRAGMA');
}

function isInsertSQL(sql) {
  return sql.trim().toUpperCase().startsWith('INSERT');
}

const wrapper = {
  execute(sql, params = []) {
    try {
      const stmt = db.prepare(sql);

      if (isSelectSQL(sql)) {
        // SELECT → trả về mảng các dòng
        const rows = stmt.all(...params);
        return [rows, { rows }];
      } else if (isInsertSQL(sql)) {
        // INSERT → trả về { insertId, affectedRows }
        const result = stmt.run(...params);
        const fakeResult = {
          insertId: Number(result.lastInsertRowid),
          affectedRows: result.changes
        };
        return [fakeResult, result];
      } else {
        // UPDATE, DELETE, ... → trả về { affectedRows }
        const result = stmt.run(...params);
        const fakeResult = {
          affectedRows: result.changes,
          changedRows: result.changes
        };
        return [fakeResult, result];
      }
    } catch (err) {
      // Ném lỗi giống mysql2 để controller vẫn bắt được
      throw err;
    }
  },

  query(sql, params = []) {
    return this.execute(sql, params);
  },

  // Phương thức close để dọn dẹp khi cần
  close() {
    if (db) {
      db.close();
    }
  },

  // Truy cập trực tiếp database better-sqlite3 (cho các tác vụ đặc biệt)
  get rawDb() {
    return db;
  }
};

console.log(`✅ Kết nối SQLite thành công: ${dbPath}`);

module.exports = wrapper;
