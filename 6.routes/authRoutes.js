// 6.routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { signup, signin } = require('../9.controllers/authController.js');

router.post('/signup', signup);
router.post('/signin', signin);

module.exports = router;