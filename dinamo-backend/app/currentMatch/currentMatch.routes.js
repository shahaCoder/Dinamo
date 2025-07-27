const express = require('express');
const { getCurrentMatch, postCurrentMatch,deleteCurrentMatch, updateCurrentMatch } = require('./currentMatch.controller')


const router = express.Router();

router.route('/currentMatches').get(getCurrentMatch).post(postCurrentMatch);

router.route('/currentMatches/:id').delete(deleteCurrentMatch);
router.route('/updateCurrentMatch/:id').patch(updateCurrentMatch);

module.exports = router