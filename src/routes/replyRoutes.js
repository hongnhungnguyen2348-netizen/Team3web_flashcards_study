const express = require('express');
const router = express.Router();
const replyController = require('../controllers/replyController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');

// Admin routes
router.post('/reply', isAdmin, replyController.sendReply);
router.get('/reply/:commentId', isAdmin, replyController.getReplyByCommentId);

// User routes (thông báo)
router.get('/notifications', isAuthenticated, replyController.getNotifications);
router.get('/notifications/:id', isAuthenticated, replyController.getNotificationDetail);
router.put('/notifications/read-all', isAuthenticated, replyController.markAllRead);

module.exports = router;