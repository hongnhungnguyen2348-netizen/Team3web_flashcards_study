const express = require('express');
const router = express.Router();
const adminController = require('../9.controllers/adminController');

// Bỏ qua middleware kiểm tra (member khác lo login)
function isAdmin(req, res, next) {
  return next();
}

// Trang admin chính
router.get('/', isAdmin, adminController.getAdminDashboard);

// Xóa comment
router.delete('/comment/:id', adminController.deleteComment);

// Sửa nội dung
router.get('/edit/:id', adminController.getEditContent);
router.put('/edit/:id', adminController.updateContent);

module.exports = router;