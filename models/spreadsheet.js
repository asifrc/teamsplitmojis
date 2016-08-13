var load = function(keys, text) {
  var rows = text.split("\n");
  var data = rows.map(function(row) {
    var values = row.split("\t");
    if (values.length !== keys.length) {
      return "Invalid Row";
    }
    return values.reduce(function(obj, value, index) {
      obj[keys[index]] = value;
      return obj;
    }, {});
  });

  var isValid = function(row) {
    return row != "Invalid Row";
  };

  return data.every(isValid) && data;
};

module.exports.load = load;
