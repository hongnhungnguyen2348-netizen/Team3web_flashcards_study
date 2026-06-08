const db = require('./5.config/database');
// Trang admin dashboard
exports.getAdminDashboard = async (req, res) => {
  try {
    // Lấy tổng số bình luận
    const [commentRows] = await db.execute('SELECT COUNT(*) as count FROM comments');
    const totalComments = commentRows[0].count;
    
    // Lấy tổng số flashcard
    const [contentRows] = await db.execute('SELECT COUNT(*) as count FROM contents');
    const totalFlashcards = contentRows[0].count;
    
    // Lấy danh sách bình luận gần nhất
    const [comments] = await db.execute(`
      SELECT * FROM comments ORDER BY createdAt DESC LIMIT 20
    `);
    
    // Số lượt xem giả (có thể thay bằng biến đếm sau)
    const totalViews = Math.floor(Math.random() * 10000) + 1000;
    
    res.render('admin/index', {
      totalViews: totalViews,
      totalComments: totalComments,
      totalFlashcards: totalFlashcards,
      comments: comments
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Lỗi server: ' + err.message);
  }
};

// Xóa comment
exports.deleteComment = async (req, res) => {
  try {
    await db.execute('DELETE FROM comments WHERE id = ?', [req.params.id]);
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
};

// Lấy nội dung flashcard để sửa
exports.getEditContent = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM contents WHERE id = ?', [req.params.id]);
    if (rows.length === 0) {
      return res.send('<h3>Không tìm thấy flashcard</h3><a href="/admin">Quay lại</a>');
    }
    res.render('admin/edit', { content: rows[0] });
  } catch (err) {
    res.status(500).send('Lỗi: ' + err.message);
  }
};

// Cập nhật flashcard
exports.updateContent = async (req, res) => {
  try {
    const { title, body } = req.body;
    await db.execute('UPDATE contents SET title = ?, body = ? WHERE id = ?', 
      [title, body, req.params.id]);
    res.json({ success: true, message: 'Cập nhật thành công!' });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
};

// Danh sách flashcard (thêm mới)
exports.getFlashcardList = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM contents ORDER BY createdAt DESC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};