const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const getPlayers = async (req, res) => {
	const locale = req.query.locale || 'uz'
	try {
		const players = await prisma.player.findMany({
			include: {
				translations: {
					where: { locale },
					select: {
						firstName: true,
						lastName: true,
						position: true,
						nationality: true
					},
				},
			},
		})
		const transformed = players.map(player => {
			const translation = player.translations[0] || {}
			return {
				...player,
				...translation,
				translations: undefined,
			}
		})
		res.json(transformed)
	} catch (error) {
		console.log(error)
		res.status(500).json({ error: 'Ошибка при получении игроков' })
	}
}

const postNewPlayer = async (req, res) => {
	const {
		number,
		birthDate,
		height,
		weight,
		goals,
		assists,
		matchesPlayed,
		yellowCards,
		redCards,
		imageUrl,
		translations = []
	} = req.body

	const parsedDate = new Date(birthDate)
	if (isNaN(parsedDate.getTime())) {
		return res.status(400).json({ error: 'Некорректная дата' })
	}

	try {
		const newPlayer = await prisma.player.create({
			data: {
				number,
				birthDate: parsedDate,
				height,
				weight,
				goals,
				assists,
				matchesPlayed,
				yellowCards,
				redCards,
				imageUrl,
				translations: {
					create: translations.map(t => ({
						locale: t.locale,
						firstName: t.firstName || '',
						lastName: t.lastName || '',
						position: t.position || '',
						nationality: t.nationality || '',
					})),
				},
			},
		})
		res.json(newPlayer)
	} catch (error) {
		console.log(error)
		res.status(500).json({ error: 'Ошибка при создании игрока' })
	}
}

const deletePlayer = async (req, res) => {
	try {
		const id = parseInt(req.params.id, 10)
		if (isNaN(id)) {
			return res.status(400).json({ error: 'Некорректный ID' })
		}

		const player = await prisma.player.findUnique({ where: { id } })
		if (!player) {
			return res.status(404).json({ error: 'Игрок не найден' })
		}

		await prisma.player.delete({ where: { id } })
		res.json({ message: 'Игрок успешно удалён' })
	} catch (error) {
		console.log(error)
		res.status(500).json({ error: 'Внутренняя ошибка сервера' })
	}
}

const editPlayer = async (req, res) => {
	try {
		const id = parseInt(req.params.id, 10)
		if (isNaN(id)) return res.status(400).json({ error: 'Некорректный ID' })
		const existingPlayer = await prisma.player.findUnique({ where: { id } })
		if (!existingPlayer) return res.status(404).json({ error: 'Игрок не найден' })

		const {
			number,
			birthDate,
			height,
			weight,
			goals,
			assists,
			matchesPlayed,
			yellowCards,
			redCards,
			imageUrl,
			translations = [],
		} = req.body

		const playerData = {
			number,
			birthDate: birthDate ? new Date(birthDate) : undefined,
			height,
			weight,
			goals,
			assists,
			matchesPlayed,
			yellowCards,
			redCards,
			imageUrl,
		}

		const cleanData = Object.fromEntries(
			Object.entries(playerData).filter(([_, v]) => v !== undefined)
		)

		const updatedPlayer = await prisma.player.update({
			where: { id },
			data: cleanData,
		})

		for (const t of translations) {
			if (!t.locale) continue
			const existingTranslation = await prisma.playerTranslation.findFirst({
				where: {
					playerId: id,
					locale: t.locale
				},
			})

			if (existingTranslation) {
				await prisma.playerTranslation.update({
					where: { id: existingTranslation.id },
					data: {
						...(t.firstName && { firstName: t.firstName }),
						...(t.lastName && { lastName: t.lastName }),
						...(t.position && { position: t.position }),
						...(t.nationality && { nationality: t.nationality }),
					},
				})
			} else {
				await prisma.playerTranslation.create({
					data: {
						locale: t.locale,
						firstName: t.firstName || '',
						lastName: t.lastName || '',
						position: t.position || '',
						nationality: t.nationality || '',
						player: { connect: { id } }
					},
				})
			}
		}

		res.json({ message: 'Игрок успешно обновлён', updatedPlayer })
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: 'Ошибка при обновлении игрока' })
	}
}

module.exports = {
	postNewPlayer,
	getPlayers,
	deletePlayer,
	editPlayer,
}
