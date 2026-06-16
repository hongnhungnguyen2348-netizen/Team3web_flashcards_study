const mysql = require('mysql2');
const bcrypt = require('bcrypt');

// Kết nối MySQL
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'web_login_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const db = pool.promise();

// Tạo bảng comments nếu chưa có
async function initDatabase() {
  try {
    // Tạo bảng users
    await db.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        role ENUM('admin','user') DEFAULT 'user',
        is_locked BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Bảng users đã sẵn sàng');

    // Thêm tài khoản admin mặc định nếu chưa có
    const [adminRows] = await db.execute("SELECT id FROM users WHERE username = 'admin'");
    if (adminRows.length === 0) {
      const hashedPassword = await bcrypt.hash('123456', 10);
      await db.execute(
        "INSERT INTO users (username, email, password, role) VALUES ('admin', 'admin@test.com', ?, 'admin')",
        [hashedPassword]
      );
      console.log('✅ Đã tạo tài khoản admin mặc định');
    }

    // Tạo bảng comments
    await db.execute(`
      CREATE TABLE IF NOT EXISTS comments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        contentId VARCHAR(100) NOT NULL,
        username VARCHAR(50) NOT NULL,
        content TEXT NOT NULL,
        rating INT DEFAULT 5,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Bảng comments đã sẵn sàng');

    // Tạo bảng contents (flashcard)
    await db.execute(`
      CREATE TABLE IF NOT EXISTS contents (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(200) NOT NULL,
        body TEXT NOT NULL,
        type VARCHAR(50) DEFAULT 'flashcard',
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Bảng contents đã sẵn sàng');

    // Thêm dữ liệu mẫu cho contents (nếu chưa có)
    const [rows] = await db.execute('SELECT COUNT(*) as count FROM contents');
    if (rows[0].count === 0) {
      await db.execute(`
        INSERT INTO contents (title, body, type) VALUES 
        ('Động từ bất quy tắc - Go', 'Go - Went - Gone', 'flashcard'),
        ('Từ vựng gia đình', 'Father, Mother, Brother, Sister', 'flashcard'),
        ('Thời tiết', 'Sunny, Rainy, Cloudy, Windy', 'flashcard')
      `);
      console.log('✅ Đã thêm dữ liệu mẫu vào contents');
    }

    // Thêm dữ liệu mẫu cho comments (nếu chưa có)
    const [commentRows] = await db.execute('SELECT COUNT(*) as count FROM comments');
    if (commentRows[0].count === 0) {
      await db.execute(`
        INSERT INTO comments (contentId, username, content, rating) VALUES 
        ('1', 'user1', 'Flashcard rất hay!', 5),
        ('1', 'user2', 'Cần thêm ví dụ', 4),
        ('2', 'user3', 'Giao diện đẹp!', 5)
      `);
      console.log('✅ Đã thêm dữ liệu mẫu vào comments');
    }

  } catch (err) {
    console.error('❌ Lỗi database:', err.message);
  }
}

initDatabase();

module.exports = db;
