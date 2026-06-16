const express = require('express');
const router = express.Router();
const userController = require('../controllers/userManagementController');
const { isAdmin } = require('../middleware/auth');

// Lấy danh sách users
router.get('/list', isAdmin, userController.getUserList);

// Khóa/Mở khóa user
router.put('/toggle-lock/:id', isAdmin, userController.toggleLockUser);

// Xóa user
router.delete('/delete/:id', isAdmin, userController.deleteUser);

// Reset password user
router.post('/reset-password/:id', isAdmin, userController.resetUserPassword);

module.exports = router;