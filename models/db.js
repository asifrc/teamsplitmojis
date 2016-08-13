var diskdb = require("diskdb");
var fs = require('fs');

var connect = function(config) {
  var path = config.DB.PATH;

  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }

  return diskdb.connect(path);
}

module.exports = connect;
