// Giả sử bạn có model Comment và Content
const Comment = require('../7.models/comment');
const Content = require('../7.models/content');
// Biến đếm view (lưu trong database hoặc file)
let totalViews = 0;

exports.getAdminDashboard = async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    res.render('admin/index', {
      totalViews: totalViews,
      comments: comments,
      user: req.session.user
    });
  } catch (err) {
    res.status(500).send('Lỗi server');
  }
};

exports.deleteComment = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
};

exports.getEditContent = async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);
    res.render('admin/edit', { content: content, user: req.session.user });
  } catch (err) {
    res.status(500).send('Lỗi');
  }
};

exports.updateContent = async (req, res) => {
  try {
    const { title, body } = req.body;
    await Content.findByIdAndUpdate(req.params.id, { title, body });
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false });
  }
};