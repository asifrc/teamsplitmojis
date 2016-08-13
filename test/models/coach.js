var should = require('should');

var helper = require('../helpers/helper');

describe("Coach", function() {
  var Coach;

  beforeEach(function() {
    helper.createDB();
    Coach = new require('../../models/coach')(helper.db);
  });

  afterEach(function() {
    helper.deleteDB();
  });

  it("should add an _id to a new coach", function() {
    var coachData= {
      "Name": "Godzilla"
    };
    var coach = Coach.create(coachData);

    should.exist(coach._id);
  });

  it("should find a created coach by id", function() {
    var coachData= {
      "Name": "Godzilla"
    };
    var coach = Coach.create(coachData);

    Coach.findById(coach._id).should.eql(coach);
  });

  it("should find zero coaches when no coaches have been created", function() {
    Coach.findAll().should.eql([]);
  });

  it("should list all coaches that have been created", function() {
    var godzilla = Coach.create({"Name": "Godzilla"});
    var rickshaw = Coach.create({"Name": "Rick Shaw"});

    //Assertion is unfortunately order-specific
    Coach.findAll().should.eql([godzilla, rickshaw]);
  });

  it("should remove all coaches", function() {
    var godzilla = Coach.create({"Name": "Godzilla"});
    var rickshaw = Coach.create({"Name": "Rick Shaw"});

    Coach.removeAll();

    Coach.findAll().should.eql([]);
  });

});
