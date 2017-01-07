app.factory('dates', function () {


  var formatDate = function (inputDate) {
    inputDate = inputDate || moment();

    var date = inputDate.toString().slice(4,15).split('');
    var day = date.splice(4, 2, date[0], date[1], date[2]).join('');
    date = day + date.join('').slice(3);
  };

  var formatMonthFirstDate = function (inputDate) {
    inputDate = inputDate || moment();

    var inputDate = formatDate(inputDate).split(''); // stringified, arrayed to e.g. '04 Jan 2017'
    var day = Number(inputDate.splice(0, 3)).toString();
    // at this point, input date is 'Jan 2017' in array form
    var addedSpace = false;
    for (var i = 0; i < day.length; i++) {
      if (!addedSpace) {
        inputDate.splice(i+4, 0, ' ');
        addedSpace = true;
      }
      inputDate.splice(i+4, 0, day[i]);
    }

    return inputDate;
  };

  var randomRecentDate = function () {
    return formatDate( );
    // new Date( Date.now() - (Math.random() * 9999999))
  };

  return {
    currentDate: formatDate,
    formatMonthFirstDate: formatMonthFirstDate,
    randomRecentDate: randomRecentDate
  };
});
