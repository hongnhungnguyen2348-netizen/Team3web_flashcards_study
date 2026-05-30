const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { isAdmin } = require('../middleware/auth');

router.use(isAdmin);

router.get('/', adminController.getAdminDashboard);
router.delete('/comment/:id', adminController.deleteComment);
router.get('/edit/:id', adminController.getEditContent);
router.put('/edit/:id', adminController.updateContent);

module.exports = router;