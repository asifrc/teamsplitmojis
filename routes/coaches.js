var router = require('express').Router();

var CONFIG = require('../config');

var db = require('../models/db')(CONFIG);

var Spreadsheet = require('../models/spreadsheet');
var Coach = require('../models/coach')(db);

var respond = function(res, result) {
  res.contentType('application/json');
  res.send(JSON.stringify(result));
};

router.get('/', function(req, res) {
  var result = {
    "coaches": Coach.findAll()
  };
  respond(res, result);
});

router.post('/', function(req, res) {
  var result = {
    'error': null
  };
  var coachData = Spreadsheet.load(Coach.fields, req.body.coachData);
  if (coachData) {
    Coach.removeAll();
    coachData.forEach(function(coach) {
      Coach.create(coach);
    });
    result.coaches = Coach.findAll();
  }
  else {
    result.error = "Invalidly formatted data";
  }
  respond(res, result);
});

module.exports = router;
