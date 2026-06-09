// 6.routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { signup, signin, me, signout } = require('../controllers/authController.js');
router.post('/signup', signup);
router.post('/signin', signin);
router.get('/me', me);
router.post('/signout', signout);

module.exports = router;