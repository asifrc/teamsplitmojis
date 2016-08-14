var express = require('express');
var router = express.Router();

var coaches = require('./models')('coaches');
var coachees = require('./models')('coachees');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TeamSplitMojis' });
});

router.get('/datainput', function(req, res) {
  res.render('datainput');
});

router.use('/coaches', coaches);
router.use('/coachees', coachees);

module.exports = router;
