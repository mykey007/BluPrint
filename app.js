d3.json("history.json", function(data) {
  var statData = [];
  console.log(data);
  data.services.forEach(function(d, i) {
    var item = [d.name + ' - ' + d.status];
    var itemMessage = [d.message];
    d.values.forEach(function(j) {
      item.push(j);
      // itemMessage.push(j);
    });
    statData.push(item);
  });
  var chart = c3.generate({
    data: {
      columns: statData
    }
  });
});
// Suppossed to divide by 24 at some point...will ask someone who has done that.