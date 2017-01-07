app.factory('sales', function () {

  var addSales = function (sales1, sales2) {
    var args = Array.prototype.slice.call(arguments);

    var total = args.reduce(function(acc, num) { return acc + num; });
    var totalArray = total.toString().split('');
    var commaCounter = 0;
    for (var i = totalArray.length; i >= 0; i--) {
      if (commaCounter >= 3 && i !== 0) {
        totalArray.splice(i, 0, ',');
        commaCounter = 0;
        i++; // because we inserted an element, we need to adjust for that
        continue;
      }
      commaCounter++;
    }

    return totalArray.join('');
  };

  return {
    allSales: addSales
  };
};
