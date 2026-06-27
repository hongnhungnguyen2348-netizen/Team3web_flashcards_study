const db = require('../config/database');
const { getTotalViews } = require('../middleware/viewCounter');

console.log('getTotalViews trong adminController:', typeof getTotalViews);

// Trang admin dashboard
exports.getAdminDashboard = async (req, res) => {
  try {
    console.log('Đang chạy getAdminDashboard...');
    
    const [commentRows] = await db.execute('SELECT COUNT(*) as count FROM comments');
    const totalComments = commentRows[0].count;
    
    // SỬA: Thêm has_reply vào query
    const [comments] = await db.execute(`
      SELECT c.*, 
             CASE WHEN fr.id IS NOT NULL THEN 1 ELSE 0 END as has_reply
      FROM comments c
      LEFT JOIN feedback_replies fr ON c.id = fr.comment_id
      ORDER BY c.createdAt DESC 
      LIMIT 20
    `);
    
    console.log('Đang gọi getTotalViews...');
    const totalViews = await getTotalViews();
    console.log('totalViews:', totalViews);
    
    res.render('admin/index', {
      totalViews: totalViews,
      totalComments: totalComments,
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



