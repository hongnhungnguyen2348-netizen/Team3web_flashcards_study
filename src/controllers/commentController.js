const pool = require('../config/database');

// POST /api/comments — Thêm bình luận mới
exports.addComment = async (req, res) => {
  try {
    const { contentId, content, rating } = req.body;

    // Lấy username từ session (middleware isAuthenticated đã đảm bảo đã đăng nhập)
    const username = req.session.user.username;

    if (!contentId || !content) {
      return res.status(400).json({ success: false, error: 'Thiếu thông tin bình luận' });
    }

    const safeRating = Math.min(5, Math.max(1, parseInt(rating) || 5));

    const [result] = await pool.query(
      'INSERT INTO comments (contentId, username, content, rating) VALUES (?, ?, ?, ?)',
      [contentId, username, content, safeRating]
    );

    // Trả về comment vừa tạo
    const [rows] = await pool.query(
      'SELECT * FROM comments WHERE id = ?',
      [result.insertId]
    );

    res.json({ success: true, comment: rows[0] });
  } catch (err) {
    console.error('addComment error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
};

// GET /api/comments/:contentId — Lấy danh sách bình luận theo nội dung
exports.getCommentsByContent = async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT * FROM comments WHERE contentId = ? ORDER BY createdAt DESC',
      [req.params.contentId]
    );
    res.json(rows);
  } catch (err) {
    console.error('getCommentsByContent error:', err);
    res.status(500).json({ error: err.message });
  }
};

// THÊM controller mới cho contact form (KHÔNG cần đăng nhập)
exports.addContactComment = async (req, res) => {
  try {
    const { fullName, email, message, rating } = req.body;

    
    // Validate dữ liệu
    if (!fullName || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Vui lòng điền đầy đủ thông tin' 
      });
    }
    
    // Lưu vào bảng comments
    await pool.query(
      `INSERT INTO comments (contentId, username, email, content, rating) 
       VALUES (?, ?, ?, ?, ?)`,
      ['contact', fullName, email, message, rating || 5]
    );
    
    res.json({ 
      success: true, 
      message: 'Cảm ơn bạn đã đánh giá!' 
    });
  } catch (err) {
    console.error('Lỗi lưu đánh giá:', err);
    res.status(500).json({ 
      success: false, 
      error: err.message 
    });
  }
};