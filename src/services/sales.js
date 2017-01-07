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

  var maxSales = function (array1, array2) {
    var last1 = array1[array1.length - 1];
    var last2 = array2[array2.length - 1];
    var max = (last1 >= last2) ? last1 : last2;
    return max.toString() + ',000';
  };

  return {
    allSales: addSales,
    peakLastMonthSales: maxSales
  };
});
