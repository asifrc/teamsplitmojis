$('#btnSaveCoaches').click(function() {
  var coachData = {
    "data": $("#coachData").val()
  };
  $.post('/coaches', coachData, function(data) {
    asif = data;
    console.log(data);
  });
});

$('#btnSaveCoachees').click(function() {
  var coacheeData = {
    "data": $("#coacheeData").val()
  };
  $.post('/coachees', coacheeData, function(data) {
    asif = data;
    console.log(data);
  });
});
