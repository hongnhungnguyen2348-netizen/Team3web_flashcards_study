const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const { isAuthenticated } = require('../middleware/auth');

router.post('/', isAuthenticated, commentController.addComment);
router.get('/:contentId', commentController.getCommentsByContent);

module.exports = router;