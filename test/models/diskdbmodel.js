var should = require('should');

var helper = require('../helpers/helper');

describe("DiskDBModel", function() {
  var Model;

  beforeEach(function() {
    helper.createDB();
    Model = new require('../../models/diskdbmodel')('model', helper.db);
  });

  afterEach(function() {
    helper.deleteDB();
  });

  it("should find a created model by name", function() {
    var modelData= {
      "Name": "Godzilla"
    };
    var model = Model.create(modelData);

    Model.findByName(model.Name).should.eql(model);
  });

  it("should find zero models when no models have been created", function() {
    Model.findAll().should.eql([]);
  });

  it("should list all models that have been created", function() {
    var godzilla = Model.create({"Name": "Godzilla"});
    var rickshaw = Model.create({"Name": "Rick Shaw"});

    //Assertion is unfortunately order-specific
    Model.findAll().should.eql([godzilla, rickshaw]);
  });

  it("should remove all models", function() {
    var godzilla = Model.create({"Name": "Godzilla"});
    var rickshaw = Model.create({"Name": "Rick Shaw"});

    Model.removeAll();

    Model.findAll().should.eql([]);
  });

});
