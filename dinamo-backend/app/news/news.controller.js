const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Создание новости

const getAllNews = async (req, res) => {
  const locale = req.query.locale || 'uz'
  try {
    const newsList = await prisma.news.findMany({
      include: {
        comments: true, // Включаем комментарии
        translations: {
          where: { locale },
          select: {
            title: true,
            content: true
          }
        }
      },
    });

    const transformed = newsList.map(news => {
      const translation = news.translations[0] || {}
      return {
        ...news,
        ...translation,
        translations: undefined
      }  
    })
    res.json(transformed);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при получении новостей' });
  }
};
const postNews = async (req, res) => {
  try {
    const { imageUrl, translations = [] } = req.body;

    if (!translations.length) {
  return res.status(400).json({ error: 'Не переданы переводы' });
}

    const newNews = await prisma.news.create({
      data: {
        imageUrl,
        translations: {
          create: translations.map(t => ({
            locale: t.locale,
            title: t.title,
            content: t.content
          }))
        }
      },
    });
    res.json(newNews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при создании новости' });
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
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json({ error: 'Некорректный ID' });

    const news = await prisma.news.findUnique({  
      where: { id },
    });

    if (!news) {
      return res.status(404).json({ message: 'Данная новость удалена или не существует' });
    }

    const { title, content, imageUrl, translations = [] } = req.body;
    const newsData = { imageUrl };

    const cleanData = Object.fromEntries(
      Object.entries(newsData).filter(([_, v]) => v !== undefined)
    );

    const updatedNews = await prisma.news.update({  
      where: { id },
      data: cleanData,
    });

    for (const t of translations) {
      if (!t.locale) continue;

      const existingTranslation = await prisma.newsTranslation.findFirst({
        where: {
          newsId: id,
          locale: t.locale,
        },
      });

      if (existingTranslation) {
        await prisma.newsTranslation.update({
          where: { id: existingTranslation.id },
          data: {
            ...(t.title && { title: t.title }),
            ...(t.content && { content: t.content }),
          },
        });
      } else {
        await prisma.newsTranslation.create({
          data: {
            locale: t.locale,
            title: t.title || '',
            content: t.content || '',
            news: { connect: { id } },
          },
        });
      }
    }

    res.json({ message: 'Новость успешно обновлена', updatedNews });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Ошибка при обновлении новости' });
  }
};



module.exports = { postNews, getAllNews, deleteNews, updateNews };
