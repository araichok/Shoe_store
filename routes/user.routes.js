const express = require('express');
const { authMiddleware, adminMiddleware } = require('../middleware/auth.middleware');
const User = require('../models/user.model');

const router = express.Router();

// Получить всех пользователей (доступно только админам)
router.get('/', authMiddleware, adminMiddleware, async (req, res) => {
    const users = await User.find().select('-password'); // Не возвращаем пароли
    res.json(users);
});

// Получить информацию о текущем пользователе
router.get('/me', authMiddleware, async (req, res) => {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
});

module.exports = router;
