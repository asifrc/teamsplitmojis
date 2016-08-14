var DiskDBModel = require('./diskdbmodel');

var CoacheeModel = function(db) {
  var collection = "coachees";
  var self = new DiskDBModel(collection, db);
  self.fields = [
    'Name',
    'Team',
    'Coach'
  ];


  return self;
};

module.exports = CoacheeModel;
