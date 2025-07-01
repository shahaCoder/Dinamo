const express = require('express');
const { getUpcomingMatch, postUpcomingMatch, deleteUpcomingMatch, updateUpcomingMatch } = require('./upComingMatches.controller')


const router = express.Router();

router.route('/upcomingMatches')
  .get(getUpcomingMatch)
  .post(postUpcomingMatch);

  router.route('/upcomingMatches/:id').delete(deleteUpcomingMatch);
  router.route('/editUpcomingMatches/:id').patch(updateUpcomingMatch)

module.exports = router;