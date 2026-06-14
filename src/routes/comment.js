const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const { isAuthenticated } = require('../middleware/auth');

// Route cũ - giữ nguyên
router.post('/', isAuthenticated, commentController.addComment);
router.get('/:contentId', commentController.getCommentsByContent);

// THÊM route mới này cho contact form (KHÔNG cần đăng nhập)
router.post('/contact', async (req, res) => {
    try {
        const db = require('../config/database');
        const { fullName, email, message, rating } = req.body;
        
        // Validate dữ liệu
        if (!fullName || !email || !message) {
            return res.status(400).json({ 
                success: false, 
                message: 'Vui lòng điền đầy đủ thông tin' 
            });
        }
        
        // Lưu vào bảng comments
        await db.execute(
            `INSERT INTO comments (contentId, username, content, rating) 
             VALUES (?, ?, ?, ?)`,
            ['contact', fullName, `📧 ${email}\n${message}`, rating || 5]
        );
        
        res.json({ 
            success: true, 
            message: 'Cảm ơn bạn đã đánh giá!' 
        });
    } catch (err) {
        console.error('Lỗi lưu đánh giá:', err);
        res.status(500).json({ 
            success: false, 
            error: err.message 
        });
    }
});

module.exports = router;