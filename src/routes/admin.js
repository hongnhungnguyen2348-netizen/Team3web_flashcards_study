const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { isAdmin } = require('../middleware/auth');

// Trang admin chính
router.get('/', isAdmin, adminController.getAdminDashboard);

// Xóa comment
router.delete('/comment/:id', isAdmin, adminController.deleteComment);

// === THAY ĐỔI: Chuyển thành quản lý user ===
router.get('/users', isAdmin, (req, res) => {
  res.render('admin/users');
});

// Giữ lại route cũ (có thể redirect hoặc bỏ)
router.get('/edit-list', isAdmin, (req, res) => {
  res.redirect('/admin/users');
});

router.get('/edit/:id', isAdmin, (req, res) => {
  res.redirect('/admin/users');
});

router.put('/edit/:id', isAdmin, (req, res) => {
  res.redirect('/admin/users');
});

module.exports = router;