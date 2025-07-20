const express = require('express');
const { PrismaClient } = require('@prisma/client');
const authRoutes = require('./auth/auth.routes'); 
const cors = require('cors');
const upComingMatchesRoutes = require('./matches/upComingMatches.routes')
const playerRoutes = require('./players/player.routes')
const newsRoutes = require('./news/news.routes')
const commentRoutes = require('./comments/comments.routes')
const pastMatchesRoutes = require('./pastMatches/pastMatch.routes')

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Маршрут для получения всех матчей

app.use(cors());
app.use('/auth', authRoutes);
app.use('/matches', upComingMatchesRoutes);
app.use('/players', playerRoutes);
app.use('/news', newsRoutes);
app.use('/comments', commentRoutes);
app.use('/pastmatches', pastMatchesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});