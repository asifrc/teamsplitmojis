var DiskDBModel = require('./diskdbmodel');

var CoachModel = function(db) {
  var collection = "coaches";
  var self = new DiskDBModel(collection, db);
  self.fields = [
    'Name'
  ];

  return self;
};

module.exports = CoachModel;
