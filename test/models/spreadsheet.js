var should = require("should");

var helper = require('../helpers/helper');

describe("Spreadsheet", function() {
  var Spreadsheet;

  before(function() {
    Spreadsheet = require('../../models/spreadsheet');
  });


  it("should return an array of objects split by line", function() {
    var keys = ["Name"];
    var text = "Godzilla\nRick Shaw";

    Spreadsheet.load(keys, text).should.be.instanceOf(Array).and.have.length(2);
  });

  it("should return an array containing a single object with they key and string value", function() {
    var keys = ["Name"];
    var text = "Godzilla";

    Spreadsheet.load(keys, text).should.eql(
      [
        {
          "Name": "Godzilla"
        }
      ]
    );
  });

  it("should return an array containing two objects with they key and string value", function() {
    var keys = ["Name"];
    var text = "Godzilla\nRick Shaw";

    Spreadsheet.load(keys, text).should.eql(
      [
        {
          "Name": "Godzilla"
        },
        {
          "Name": "Rick Shaw"
        }
      ]
    );
  });

  it("should return an array of objects  with associated keys", function() {
    var keys = ["Name", "Team", "Coach"];
    var text = "Freezer\tD7\tGodzilla\nToggle\tD8\tRick Shaw";

    Spreadsheet.load(keys, text).should.eql(
      [
        {
          "Name": "Freezer",
          "Team": "D7",
          "Coach": "Godzilla"
        },
        {
          "Name": "Toggle",
          "Team": "D8",
          "Coach": "Rick Shaw"
        }
      ]
    );
  });

  it("should return false when not enough values matching keys", function() {
    var keys = ["Name", "Team", "Coach"];
    var text = "Freezer\nToggle\tD8\tRick Shaw";

    Spreadsheet.load(keys, text).should.equal(false);
  });

});
