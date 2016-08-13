var DiskDBModel = function(collection, db) {

  var self = this;

  db.loadCollections([collection]);

  var create = function(data) {
    var coach = db[collection].save(data);
    return coach;
  };
  self.create = create;

  var findById = function(id) {
    var coach = db[collection].findOne({_id: id});
    return coach;
  }
  self.findById = findById;

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
