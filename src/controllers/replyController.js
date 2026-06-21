const db = require('../config/database');

// Lấy phản hồi của comment
exports.getReplyByCommentId = async (req, res) => {
  try {
    const { commentId } = req.params;
    const [rows] = await db.execute(
      'SELECT * FROM feedback_replies WHERE comment_id = ? ORDER BY created_at DESC LIMIT 1',
      [commentId]
    );
    res.json({ success: true, reply: rows[0] || null });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Gửi phản hồi (admin)
exports.sendReply = async (req, res) => {
  try {
    const { commentId, reply } = req.body;
    const adminUsername = req.session.user.username;
    const adminId = req.session.user.id;

    if (!commentId || !reply) {
      return res.status(400).json({ success: false, error: 'Thiếu thông tin phản hồi' });
    }

    // Lấy thông tin comment để biết user nào nhận phản hồi
    const [commentRows] = await db.execute(
      'SELECT username, email FROM comments WHERE id = ?',
      [commentId]
    );

    if (commentRows.length === 0) {
      return res.status(404).json({ success: false, error: 'Không tìm thấy comment' });
    }

    const comment = commentRows[0];

    // Lưu phản hồi
    await db.execute(
      'INSERT INTO feedback_replies (comment_id, admin_username, reply) VALUES (?, ?, ?)',
      [commentId, adminUsername, reply]
    );

    // Tìm user_id từ username
    const [userRows] = await db.execute(
      'SELECT id FROM users WHERE username = ?',
      [comment.username]
    );

    let userId = null;
    if (userRows.length > 0) {
      userId = userRows[0].id;
    }

    // Nếu tìm thấy user, tạo thông báo trong hòm thư
    if (userId) {
      // Lấy nội dung comment để hiển thị
      const [commentContent] = await db.execute(
        'SELECT content FROM comments WHERE id = ?',
        [commentId]
      );
      
      const contentPreview = commentContent[0]?.content?.substring(0, 100) || '';

      await db.execute(
        `INSERT INTO notifications (user_id, title, message, type) 
         VALUES (?, ?, ?, ?)`,
        [
          userId,
          `📬 Phản hồi từ Admin`,
          `Admin đã phản hồi góp ý của bạn:\n\n"${reply}"\n\n📝 Nội dung góp ý: ${contentPreview}${contentPreview.length >= 100 ? '...' : ''}`,
          'info'
        ]
      );
    }

    res.json({ 
      success: true, 
      message: 'Đã gửi phản hồi thành công!',
      userId: userId
    });
  } catch (err) {
    console.error('Lỗi gửi phản hồi:', err);
    res.status(500).json({ success: false, error: err.message });
  }
};

// Lấy danh sách thông báo của user (dùng cho library1.js)
exports.getNotifications = async (req, res) => {
  try {
    const userId = req.session.user.id;

    const [notifications] = await db.execute(
      `SELECT * FROM notifications 
       WHERE user_id = ? 
       ORDER BY created_at DESC 
       LIMIT 50`,
      [userId]
    );

    const [unreadCount] = await db.execute(
      `SELECT COUNT(*) as count FROM notifications 
       WHERE user_id = ? AND is_read = 0`,
      [userId]
    );

    res.json({
      success: true,
      notifications: notifications,
      unreadCount: unreadCount[0].count
    });
  } catch (err) {
    console.error('Lỗi lấy thông báo:', err);
    res.status(500).json({ success: false, error: err.message });
  }
};

// Lấy chi tiết một thông báo
exports.getNotificationDetail = async (req, res) => {
  try {
    const userId = req.session.user.id;
    const notifId = req.params.id;

    // Đánh dấu đã đọc
    await db.execute(
      'UPDATE notifications SET is_read = 1 WHERE id = ? AND user_id = ?',
      [notifId, userId]
    );

    const [rows] = await db.execute(
      'SELECT * FROM notifications WHERE id = ? AND user_id = ?',
      [notifId, userId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Không tìm thấy thông báo' });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error('Lỗi lấy chi tiết thông báo:', err);
    res.status(500).json({ success: false, error: err.message });
  }
};

// Đánh dấu tất cả đã đọc
exports.markAllRead = async (req, res) => {
  try {
    const userId = req.session.user.id;

    await db.execute(
      'UPDATE notifications SET is_read = 1 WHERE user_id = ? AND is_read = 0',
      [userId]
    );

    res.json({ success: true });
  } catch (err) {
    console.error('Lỗi đánh dấu đã đọc:', err);
    res.status(500).json({ success: false, error: err.message });
  }
};