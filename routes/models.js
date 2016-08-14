var CONFIG = require('../config');
var db = require('../models/db')(CONFIG);
var Spreadsheet = require('../models/spreadsheet');

var Models = {
  'coaches': require('../models/coach')(db),
  'coachees': require('../models/coachee')(db)
};

var ModelRouter = function(model) {
  var router = require('express').Router();

  var respond = function(res, result) {
    res.contentType('application/json');
    res.send(JSON.stringify(result));
  };

  router.get('/', function(req, res) {
    var result = {};
    result[model] = Models[model].findAll();
    respond(res, result);
  });

  router.post('/', function(req, res) {
    var result = {
      'error': null
    };
    var coachData = Spreadsheet.load(Models[model].fields, req.body.data);
    if (coachData) {
      Models[model].removeAll();
      coachData.forEach(function(coach) {
        Models[model].create(coach);
      });
      result[model] = Models[model].findAll();
    }
    else {
      result.error = "Invalidly formatted data";
    }
    respond(res, result);
  });

  return router;
};

module.exports = ModelRouter;
