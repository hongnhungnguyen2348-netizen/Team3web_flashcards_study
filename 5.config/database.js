const mysql = require('mysql2');

// Kết nối MySQL
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',        // thay bằng user MySQL của bạn
  password: '',        // thay bằng password MySQL của bạn
  database: 'web_login_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const db = pool.promise();

// Tạo bảng comments nếu chưa có
async function initDatabase() {
  try {
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
