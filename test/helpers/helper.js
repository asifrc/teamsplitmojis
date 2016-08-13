var fs = require('fs');

var TESTCONFIG = require("../../config");

TESTCONFIG.DB.PATH = "./test/data";

var db = new require("../../models/db")(TESTCONFIG);

var createDB = function() {
  if (!fs.existsSync(TESTCONFIG.DB.PATH)) {
    fs.mkdirSync(TESTCONFIG.DB.PATH);
  }
};

var deleteFolderRecursive = function(path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(function(file) {
      var curPath = path + '/' + file;
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};

var deleteDB = function() {
  deleteFolderRecursive(TESTCONFIG.DB.PATH);
};

module.exports.db = db;
module.exports.createDB = createDB;
module.exports.deleteDB = deleteDB;
