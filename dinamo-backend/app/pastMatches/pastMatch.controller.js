const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const GetAllPastMatches = async (req, res) => {
	const locale = req.query.locale || 'uz'
	try {
		const pastMatches = await prisma?.pastMatch?.findMany({
			include: {
				translations: {
					where: { locale },
					select: {
						opponent: true,
						stadium: true
					}
				}
			}
		})
		const transformed = pastMatches.map(i => {
			const translation = i.translations[0] || {}
			return {
				...i,
				...translation,
				translations: undefined
			}
		})
		res.json(transformed) // Отправляем данные в ответе
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: 'Ошибка при получении прошлых матчей' })
	}
}

const PostPastMatch = async (req, res) => {
	const {
		matchDate,
		isHomeGame,
		homeTeamScore,
		awayTeamScore,
		opponentLogo,
		translations = []
	} = req.body

	// Проверка корректности даты hehehe :)
	const parsedDate = new Date(matchDate)
	if (isNaN(parsedDate.getTime())) {
		return res.status(400).json({ error: 'Некорректная дата' })
	}
	try {
		// Создание нового матча
		const pastMatch = await prisma.pastMatch.create({
			data: {
				matchDate: parsedDate,
				isHomeGame,
				homeTeamScore,
				awayTeamScore,
				opponentLogo,
				translations: {
					create: translations.map(t => ({
						locale: t.locale,
						opponent: t.opponent || '',
						stadium: t.stadium || ''
					}))
				}
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

		const pastMatch = await prisma.pastMatch.findUnique({
			where: { id }
		})

		if (!pastMatch) {
			return res.status(404).json({ error: 'Игра не найдена' })
		}

		await prisma.pastMatch.delete({
			where: { id }
		})

		res.json({ message: 'Игра успешно удалена' })
	} catch (error) {
		console.log(error)
		res.status(500).json({ error: 'Внутренняя ошибка сервера' })
	}
}

const updatePastMatch = async (req, res) => {
	try {
		const id = parseInt(req.params.id, 10)
		if (isNaN(id)) return res.status(400).json({ error: 'Некорректный ID' })

		const pastMatch = await prisma.pastMatch.findUnique({ where: { id } })
		if (!pastMatch) {
			return res.status(404).json({ error: 'Игра не найдена' })
		}

		const {
			matchDate,
			isHomeGame,
			homeTeamScore,
			awayTeamScore,
			opponentLogo,
			translations = []
		} = req.body

		const matchData = {
			matchDate,
			isHomeGame,
			homeTeamScore,
			awayTeamScore,
			opponentLogo
		}

		// Удаляем undefined поля
		const cleanData = Object.fromEntries(
			Object.entries(matchData).filter(([_, v]) => v !== undefined)
		)

		// Обновляем основную таблицу
		const updatedPastMatch = await prisma.pastMatch.update({
			where: { id },
			data: cleanData
		})

		// Обновляем перевод, если пришли поля
		for (const t of translations) {
			if(!t.locale) continue
			const existingTranslation = await prisma.pastMatchTranslation.findFirst({
				where: {
					pastMatchId: id,
					locale: t.locale
				}
			})
			if(existingTranslation) {
				await prisma.playerTranslation.update({
					where: { id: existingTranslation },
					data: {
						...(t.opponent && { opponent: t.opponent}),
						...(t.stadium && { stadium: t.stadium})
					}
				})
			} else {
				await prisma.playerTranslation.create({
					data: {
						locale: t.locale,
						opponent: t.opponent || '',
						stadium: t.stadium || '',
						pastMatch: { connect: { id } }
					}
				})
			}
		}

		res.json({ message: 'Игра успешно обновлена', updatedPastMatch })
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: 'Не удалось внести изменения' })
	}
}


module.exports = {
	PostPastMatch,
	GetAllPastMatches,
	pastMatchDelete,
	updatePastMatch
}
