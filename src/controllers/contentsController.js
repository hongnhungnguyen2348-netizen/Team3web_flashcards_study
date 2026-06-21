const db = require('../config/database');

// GET /api/contents — Lấy tất cả nội dung flashcard mẫu từ bảng contents
exports.getContents = async (req, res) => {
  try {
    const [rows] = await db.execute(
      'SELECT * FROM contents ORDER BY createdAt DESC'
    );
    res.json({ success: true, contents: rows });
  } catch (err) {
    console.error('getContents error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
};
