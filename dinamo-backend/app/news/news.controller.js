const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Создание новости
const postNews = async (req, res) => {
  try {
    const { title, content, imageUrl } = req.body;

    const newNews = await prisma.news.create({
      data: {
        title,
        content,
        imageUrl,
      },
    });

    res.status(201).json(newNews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при создании новости' });
  }
};

// Получение всех новостей с комментариями
const getAllNews = async (req, res) => {
  try {
    const newsList = await prisma.news.findMany({
      include: {
        comments: true, // Включаем комментарии
      },
    });

    res.json(newsList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при получении новостей' });
  }
};

const deleteNews = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);  // Преобразуем ID в число

    if (isNaN(id)) {
      return res.status(400).json({ error: 'Некорректный ID' });
    }

    // Проверяем, существует ли новость с таким ID
    const news = await prisma.news.findUnique({
      where: { id },
    });

    if (!news) {
      return res.status(404).json({ error: 'Новость не найдена' });
    }

    // Удаляем новость
    await prisma.news.delete({
      where: { id },
    });

    res.json({ message: 'Новость успешно удалена' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при удалении' });
  }
};

const updateNews = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10)

    const news = await prisma.upcomingMatch.findUnique({
      where: { id },
    });

    if(!news){
      return res.status(404).json({message: 'Дaнная новость удалена или не существует'})
    }

    const {title, content, imageUrl} = req.body
    const newsData = {title, content, imageUrl}
    const data = {}
    Object.keys(newsData)?.forEach(element => {
      if(newsData[element] !== undefined){
        data[element] = newsData[element]
      }
    });
    // if(title) data.title = title
    // if(content) data.content = content
    // if(imageUrl) data.imageUrl = imageUrl

    const updatedNews = await prisma.news.update(({
      where: { id }, 
      data: data
    }))
    res.json({ message: 'Матч успешно обновлен', updatedNews });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Ошибка при обновлении новости' });
    
  }
}


module.exports = { postNews, getAllNews, deleteNews, updateNews };
