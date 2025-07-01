const express = require('express');
const { postNewPlayer, getPlayers, deletePlayer, editPlayer } = require('./player.controller')


const router = express.Router();

router.route('/newplayer')
.post(postNewPlayer);

router.route('/getplayers')
.get(getPlayers)

router.route('/deletePlayer/:id')
.delete(deletePlayer)

router.route('/editPlayer/:id')
.patch(editPlayer)

module.exports = router;