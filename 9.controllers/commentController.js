const Comment = require('../7.models/comment');

exports.addComment = async (req, res) => {
  try {
    const { contentId, content, rating } = req.body;
    const comment = new Comment({
      contentId,
      username: req.session.user.username,
      userId: req.session.user._id,
      content,
      rating: parseInt(rating)
    });
    await comment.save();
    res.json({ success: true, comment });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
};

exports.getCommentsByContent = async (req, res) => {
  try {
    const comments = await Comment.find({ contentId: req.params.contentId }).sort({ createdAt: -1 });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};