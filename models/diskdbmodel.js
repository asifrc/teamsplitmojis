var DiskDBModel = function(collection, db) {

  var self = this;

  db.loadCollections([collection]);

  var create = function(data) {
    var coach = db[collection].save(data);
    return coach;
  };
  self.create = create;

  var findByName = function(name) {
    var coach = db[collection].findOne({Name: name});
    return coach;
  }
  self.findByName = findByName;

  var findAll = function() {
    return db[collection].find();
  };
  self.findAll = findAll;

  var removeAll = function() {
    db[collection].remove();
    db.loadCollections([collection]);
  };
  self.removeAll = removeAll;

  return self;
};
module.exports = DiskDBModel;
