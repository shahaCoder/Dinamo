const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const GetAllPastMatches = async (req, res) => {
	try {
		const pastMatches = await prisma.pastMatch.findMany()
		res.json(pastMatches) // Отправляем данные в ответе
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: 'Ошибка при получении прошлых матчей' })
	}
}

const PostPastMatch = async (req, res) => {
	try {
		const {
			opponent,
			matchDate,
			stadium,
			isHomeGame,
			homeTeamScore,
			awayTeamScore, opponentLogo
		} = req.body

		// Проверка корректности даты hehehe :)
		const parsedDate = new Date(matchDate)
		if (isNaN(parsedDate.getTime())) {
			return res.status(400).json({ error: 'Некорректная дата' })
		}

		// Создание нового матча
		const pastMatch = await prisma.pastMatch.create({
			data: {
				opponent,
				matchDate: parsedDate,
				stadium,
				isHomeGame,
				homeTeamScore,
				awayTeamScore, 
				opponentLogo
			}
		})

		res.json(pastMatch) // Возвращаем созданный матч в ответе
	} catch (error) {
		console.log(error)
		res.status(500).json({ error: 'Ошибка при создании матча' })
	}
}

const pastMatchDelete = async (req, res) => {
	try {
		const id = parseInt(req.params.id, 10)

		if (isNaN(id)) {
			return res.status(400).json({ error: 'Некорректный ID' })
		}

		const pastMatch = await prisma.news.findUnique({
			where: { id }
		})

		if (!pastMatch) {
			return res.status(404).json({ error: 'Новость не найдена' })
		}

		await prisma.pastMatch.delete({
			where: { id }
		})

		res.json({ message: 'Игра успешно удалена' })
	} catch (error) {}
}

const updatePastMatch = async (req, res) => {
	try {
		const id = parseInt(req.params.id)
		const pastMatch = await prisma.pastMatch.findUnique({
			where: { id }
		})

		if (!pastMatch) {
			return res
				.status(404)
				.json({ message: 'Игра не найдена или не существует' })
		}

		const { opponent, matchDate, stadium, isHomeGame, homeTeamScore, awayTeamScore, opponentLogo } = req.body
		const matchData = { opponent, matchDate, stadium, isHomeGame, homeTeamScore, awayTeamScore, opponentLogo }
		const data = {}
		Object.keys(matchData)?.forEach(element => {
			if (matchData[element] !== undefined) {
				data[element] = matchData[element];
			  }
		});
		

		const updatedPastMatch = await prisma.pastMatch.update({
			where: { id },
			data: data
		})

		res.json({message: 'Игра успешно изменена', updatedPastMatch})
	} catch (error) {
		console.log(error);
		res.status(500).json({error: 'Не удалось внести изменения'})
	}
}

module.exports = { PostPastMatch, GetAllPastMatches, pastMatchDelete, updatePastMatch }
