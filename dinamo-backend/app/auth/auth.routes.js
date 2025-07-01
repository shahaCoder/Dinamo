const express = require('express');
const { register, login, getAllUsers } = require('./auth.controller');

const router = express.Router();

// Регистрация
router.route('/register').post(register);

// Вход
router.route('/login').post(login);

// Получить пользователей
router.route('/users').get(getAllUsers);

module.exports = router;
