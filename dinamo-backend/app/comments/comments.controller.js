const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// Создание комментария для новости
const postComment = async (req, res) => {
	try {
		const { newsId, content, author } = req.body

		// Проверяем, существует ли новость
		const news = await prisma.news.findUnique({
			where: { id: newsId }
		})

		if (!news) {
			return res.status(404).json({ error: 'Новость не найдена' })
		}

		const newComment = await prisma.comment.create({
			data: {
				newsId,
				content,
				author
			}
		})

		res.status(201).json(newComment)
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: 'Ошибка при создании комментария' })
	}
}

// Получение всех комментариев для определённой новости
const getCommentsByNewsId = async (req, res) => {
	try {
		const { newsId } = req.params

		const comments = await prisma.comment.findMany({
			where: { newsId: parseInt(newsId, 10) }
		})

		if (comments.length === 0) {
			return res.status(404).json({ error: 'Комментарии не найдены' })
		}

		res.json(comments)
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: 'Ошибка при получении комментариев' })
	}
}

const deleteComment = async (req, res) => {
	try {
		const id = parseInt(req.params.id, 10) // Преобразуем ID в число

		// Проверяем, является ли ID корректным числом
		if (isNaN(id)) {
			return res.status(400).json({ error: 'Некорректный ID' })
		}

		// Ищем комментарий по ID
		const comment = await prisma.comment.findUnique({
			where: { id }
		})

		// Если комментарий не найден, возвращаем ошибку 404
		if (!comment) {
			return res.status(404).json({ error: 'Комментарий не найден' })
		}

		// Удаляем комментарий
		await prisma.comment.delete({
			where: { id }
		})

		// Возвращаем успешный ответ
		res.json({ message: 'Комментарий успешно удалён!' })
	} catch (error) {
		console.log(error)
		res.status(500).json({ error: 'Ошибка при удалении' })
	}
}

const updateComment = async (req, res) => {
	try {
		const id = parseInt(req.params.id)

		const comment = await prisma.comment.findUnique({
			where: { id }
		})

		if (!comment) {
			return res.status(404).json('Комментарий не существует или был удалён')
		}

		const { content } = req.body

		const updatedComment = await prisma.comment.update({
			where: { id },
			data: { content }
		})
		res.json({ message: 'Комментарий был успешно обновлён', updatedComment })
	} catch (error) {
		console.log(error)
		res.status(500).json({ error: 'Ошибка при изменении комментария' })
	}
}

module.exports = {
	postComment,
	getCommentsByNewsId,
	deleteComment,
	updateComment
}
