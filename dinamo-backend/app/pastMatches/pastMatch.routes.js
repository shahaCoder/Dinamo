const express = require('express')

const {
	PostPastMatch,
	GetAllPastMatches,
	pastMatchDelete, 
	updatePastMatch
} = require('./pastMatch.controller')

const router = express.Router()

router.route('/pastMatches').get(GetAllPastMatches).post(PostPastMatch)

router.route('/pastMatches/:id').delete(pastMatchDelete)

router.route('/editPastMatches/:id').patch(updatePastMatch)

module.exports = router
