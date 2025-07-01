const express = require('express');
const { postNews, getAllNews, deleteNews, updateNews } = require('./news.controller');

const router = express.Router();

// Маршрут для создания новости
router.post('/publish', postNews);

// Маршрут для получения всех новостей с комментариями
router.get('/Allnews', getAllNews);

router.delete('/Allnews/:id', deleteNews);

router.patch('/Editnews/:id', updateNews);

module.exports = router;
