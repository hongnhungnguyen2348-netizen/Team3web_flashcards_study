const express = require('express');
const router = express.Router();
const { recordHomepageView } = require('../middleware/viewCounter');

// API ghi nhận lượt xem homepage (gọi từ client sau 2 phút)
router.post('/track-homepage-view', recordHomepageView);

module.exports = router;