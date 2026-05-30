const express = require('express');
const router = express.Router();
const commentController = require('../9.controllers/commentController');
const { isAuthenticated } = require('../8.middleware/auth');

router.post('/', isAuthenticated, commentController.addComment);
router.get('/:contentId', commentController.getCommentsByContent);

module.exports = router;