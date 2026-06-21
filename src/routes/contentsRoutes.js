const express = require('express');
const router = express.Router();
const contentsController = require('../controllers/contentsController');

// Lấy danh sách nội dung flashcard mẫu
router.get('/', contentsController.getContents);

module.exports = router;
