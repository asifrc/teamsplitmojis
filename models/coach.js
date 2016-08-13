var CoachModel = function(db) {
  var collection = "coaches";
  var self = require('./diskdbmodel')(collection, db);

  self.fields = [
    'Name'
  ];

  return self;
};

module.exports = CoachModel;
