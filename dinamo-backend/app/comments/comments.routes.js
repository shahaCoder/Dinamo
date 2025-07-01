const express = require('express')
const {
	postComment,
	getCommentsByNewsId,
	deleteComment,
	updateComment
} = require('./comments.controller')

const router = express.Router()

// Маршрут для создания комментария к новости
router.post('/postComment', postComment)

// Маршрут для получения комментариев по newsId
router.get('/Allcomments/:newsId', getCommentsByNewsId)

router.delete('/Allcomments/:id', deleteComment)

router.patch('/Editcomment/:id', updateComment)

module.exports = router
