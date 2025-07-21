const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

 const getUpcomingMatch = async (req, res) => {
    const locale = req.query.locale || 'uz'
    try {
      const matches = await prisma?.upcomingMatch?.findMany({
        include: {
          translations: {
            where: { locale },
            select: {
              opponent: true,
              stadium: true
            }
          }
        }
      });
      const transformed = matches.map(i => {
        const translation = i.translations[0] || {}
        return {
          ...i,
          ...translation,
          translations: undefined
        }
      })
      res.json(transformed)
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Ошибка при получении данных' })
    }
  }

  const postUpcomingMatch = async (req, res) => {
    try {
      const { matchDate, isHomeGame, ticketLink, opponentLogo, translations = [] } = req.body;
  
      // Проверка корректности даты
      const parsedDate = new Date(matchDate);
      if (isNaN(parsedDate.getTime())) {
        return res.status(400).json({ error: 'Некорректная дата' });
      }
  
      const newMatch = await prisma.upcomingMatch.create({
        data: {
          isHomeGame,
          ticketLink,
          matchDate: parsedDate,
          opponentLogo,
          translations: {
            create: translations.map(t => ({
              locale: t.locale,
              stadium: t.stadium || '',
              opponent: t.opponent || ''
            }))
          }
        },
      });
      res.json(newMatch);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ошибка при создании матча' });
    }
  };

  const deleteUpcomingMatch = async (req, res) => {
    try {
      
      const id = parseInt(req.params.id, 10) 
  
      // Проверяем, существует ли матч с таким ID
      const match = await prisma.upcomingMatch.findUnique({
        where: {id},
      });
  
      if (!match) {
        return res.status(404).json({ error: 'Матч не найден' });
      }
  
      // Удаляем матч
      await prisma.upcomingMatch.delete({
        where: { id },
      });
  
      res.json({ message: 'Матч успешно удалён' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ошибка при удалении матча' });
    }
  };

  const updateUpcomingMatch = async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);

      if(isNaN(id)) return res.status(400).json({ error: 'Некорректный ID' })
      
      // Извлекаем только те поля, которые переданы для обновления
      const { date, teams, location } = req.body;
  
      // Проверяем, существует ли матч с таким ID
      const match = await prisma.upcomingMatch.findUnique({
        where: { id },
      });
  
      if (!match) {
        return res.status(404).json({ error: 'Матч не найден' });
      }
      
      const { isHomeGame, ticketLink, matchDate, opponentLogo, translations = [] } = req.body;
  
      
      const matchData = { isHomeGame, ticketLink, matchDate, opponentLogo }
    
      const cleanData = Object.fromEntries(
        Object.entries(matchData).filter(([_, v]) => v !== undefined)
      )
  
      // Обновляем матч только по переданным полям
      const updatedMatch = await prisma.upcomingMatch.update({
        where: { id },
        data: cleanData,
      });

      for(const t of translations) {
        if(!t.locale) continue
        const existingTranslation = await prisma.upcomingMatchTranslation.findFirst({
          where: {
            upcomingMatchId: id,
            locale: t.locale
          }
        })
        if(existingTranslation) {
          await prisma.upcomingMatchTranslation.update({
            where: { id: existingTranslation.id },
            data: {
              ...(t.opponent && { opponent: t.opponent }),
              ...(t.stadium && { stadium: t.stadium }),

            }
          })
        } else {
          await prisma.upcomingMatchTranslation.create({
            data: {
              locale: t.locale,
              opponent: t.opponent || '',
              stadium: t.stadium || '',
              upcomingMatch: { connect: { id } }
            }
          })
        }
      }
  
      res.json({ message: 'Матч успешно обновлен', updatedMatch });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ошибка при обновлении матча' });
    }
  };
  

  module.exports = { getUpcomingMatch, postUpcomingMatch, deleteUpcomingMatch, updateUpcomingMatch};