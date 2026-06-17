const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const { isAuthenticated } = require('../middleware/auth');

// Route cũ - giữ nguyên
router.post('/', isAuthenticated, commentController.addComment);
router.get('/:contentId', commentController.getCommentsByContent);

// Route mới cho contact form (KHÔNG cần đăng nhập)
router.post('/contact', commentController.addContactComment);

module.exports = router;