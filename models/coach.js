var CoachModel = function(db) {
  var self = this;

  db.loadCollections(['coaches']);

  var create = function(name) {
    var coach = db.coaches.save({
      "Name": name
    });
    return coach
  };
  self.create = create;

  var findById = function(id) {
    var coach = db.coaches.findOne({_id: id});
    return coach;
  }
  self.findById = findById;

  var findAll = function() {
    return db.coaches.find();
  };
  self.findAll = findAll;

  var removeAll = function() {
    db.coaches.remove();
    db.loadCollections(['coaches']);
  };
  self.removeAll = removeAll;

  self.fields = [
    'Name'
  ];

  return self;
};

module.exports = CoachModel;
