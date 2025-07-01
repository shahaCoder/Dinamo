const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const postNewPlayer = async (req, res) => {
	const {
		firstName,
		lastName,
		position,
		number,
		birthDate,
		nationality,
		height,
		weight,
		goals,
		assists,
		matchesPlayed,
		yellowCards,
		redCards, imageUrl
	} = req.body

	const parsedDate = new Date(birthDate)
	if (isNaN(parsedDate.getTime())) {
		return res.status(400).json({ error: 'Некорректная дата' })
	}

	const newPlayer = await prisma.player.create({
		data: {
			firstName,
			lastName,
			position,
			number,
			birthDate: parsedDate,
			nationality,
			height,
			weight,
			goals,
			assists,
			matchesPlayed,
			yellowCards,
			redCards, imageUrl
		}
	})
	res.json(newPlayer)
}

const getPlayers = async (req, res) => {
	const players = await prisma?.player?.findMany()
	res.json(players)
}

const deletePlayer = async (req, res) => {
	try {
		const id = parseInt(req.params.id, 10)

		if (isNaN(id)) {
			return res.status(400).json({ error: 'Неккоректный ID' })
		}

		const player = await prisma.player.findUnique({
			where: { id }
		})

		if (!player) {
			return res.status(404).json({ error: ' Игрок не найден' })
		}

		await prisma.player.delete({
			where: { id }
		})

		res.json({ message: 'Игрок успешно удалён' })
	} catch (error) {}
}

const editPlayer = async (req, res) => {
	try {
		const id = parseInt(req.params.id)

		await prisma.player.findUnique({
			where: { id }
		})

		const {
			firstName,
			lastName,
			position,
			number,
			birthDate,
			nationality,
			height,
			weigh,
			goals,
			assists,
			matchesPlayed,
			yellowCards,
			redCards,
			imageUrl
		} = req.body

		const fields = {
			firstName,
			lastName,
			position,
			number,
			birthDate,
			nationality,
			height,
			weigh,
			goals,
			assists,
			matchesPlayed,
			yellowCards,
			redCards,
			imageUrl
		}
		const data = {}

		// Проходим по ключам объекта и добавляем их в data, если они присутствуют
		Object.keys(fields).forEach(key => {
			if (fields[key] !== undefined) {
				data[key] = fields[key]
			}
		})

		const editedPlayer = await prisma.player.update({
			where: { id },
			data: data
		})

    res.json({message: "Данные игрока успешно изменены", editedPlayer})
	} catch (error) {
    console.log(error);
    res.status(500).json({error: 'Ошибка при изменении'})
  }
}

module.exports = { postNewPlayer, getPlayers, deletePlayer, editPlayer }
