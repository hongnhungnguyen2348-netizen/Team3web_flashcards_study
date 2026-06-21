const db = require('../config/database');
const { getHomepageViews } = require('../middleware/viewCounter');

console.log('getHomepageViews trong adminController:', typeof getHomepageViews);

// Trang admin dashboard
exports.getAdminDashboard = async (req, res) => {
  try {
    console.log('Đang chạy getAdminDashboard...');
    
    const [commentRows] = await db.execute('SELECT COUNT(*) as count FROM comments');
    const totalComments = commentRows[0].count;
    
    const [contentRows] = await db.execute('SELECT COUNT(*) as count FROM contents');
    const totalFlashcards = contentRows[0].count;
    
    // SỬA: Thêm has_reply vào query
    const [comments] = await db.execute(`
      SELECT c.*, 
             CASE WHEN fr.id IS NOT NULL THEN 1 ELSE 0 END as has_reply
      FROM comments c
      LEFT JOIN feedback_replies fr ON c.id = fr.comment_id
      ORDER BY c.createdAt DESC 
      LIMIT 20
    `);
    
    console.log('Đang gọi getHomepageViews...');
    const totalViews = await getHomepageViews();
    console.log('totalViews:', totalViews);
    
    res.render('admin/index', {
      totalViews: totalViews,
      totalComments: totalComments,
      totalFlashcards: totalFlashcards,
      comments: comments
    });
  } catch (err) {
    console.error('LỖI trong getAdminDashboard:', err);
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