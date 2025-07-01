const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

// Регистрация пользователя
const register = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;

    // Проверка, существует ли пользователь
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Пользователь уже существует' });
    }

    // Хеширование пароля
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создание нового пользователя
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    return res.status(201).json({ message: 'Пользователь успешно зарегистрирован', user });
  } catch (error) {
    next(error);
  }
};

// Вход пользователя
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Поиск пользователя
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: 'Неверные учетные данные' });
    }

    // Проверка пароля
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Неверные учетные данные' });
    }

    // Генерация JWT
    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

    return res.json({ message: 'Успешный вход', token });
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();  // Получаем всех пользователей
    res.json(users);  // Возвращаем список пользователей
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при получении пользователей' });
  }
};

module.exports = { register, login, getAllUsers };
