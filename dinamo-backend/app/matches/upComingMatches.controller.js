const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

 const getUpcomingMatch = async (req, res) => {
    const matches = await prisma?.upcomingMatch?.findMany();
    res.json(matches)
  }

  const postUpcomingMatch = async (req, res) => {
    try {
      const { stadium, opponent, matchDate, isHomeGame, ticketLink, opponentLogo } = req.body;
  
      // Проверка корректности даты
      const parsedDate = new Date(matchDate);
      if (isNaN(parsedDate.getTime())) {
        return res.status(400).json({ error: 'Некорректная дата' });
      }
  
      const newMatch = await prisma.upcomingMatch.create({
        data: {
          stadium,
          opponent,
          isHomeGame,
          ticketLink,
          matchDate: parsedDate,
          opponentLogo
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
      
      // Извлекаем только те поля, которые переданы для обновления
      const { date, teams, location } = req.body;
  
      // Проверяем, существует ли матч с таким ID
      const match = await prisma.upcomingMatch.findUnique({
        where: { id },
      });
  
      if (!match) {
        return res.status(404).json({ error: 'Матч не найден' });
      }
      
      const { stadium, opponent, isHomeGame, ticketLink, matchDate, opponentLogo } = req.body;
  
      // Создаем объект для обновления, добавляя только измененные поля
      const updateData = {};
      const data = { stadium, opponent, isHomeGame, ticketLink, matchDate, opponentLogo }
    
    Object.keys(data).forEach(element => {
      if(data[element] != undefined){
        updateData[element] = data[element]
      }
    })
  
      // Обновляем матч только по переданным полям
      const updatedMatch = await prisma.upcomingMatch.update({
        where: { id },
        data: updateData,
      });
  
      res.json({ message: 'Матч успешно обновлен', updatedMatch });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ошибка при обновлении матча' });
    }
  };
  

  module.exports = { getUpcomingMatch, postUpcomingMatch, deleteUpcomingMatch, updateUpcomingMatch};