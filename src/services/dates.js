app.factory('dates', function () {

  // formats to e.g. 01 Jan 2017
  var formatDate = function (inputDate) {
    inputDate = inputDate || new Date();

    var date = inputDate.toString().slice(4,15).split('');
    var day = date.splice(4, 2, date[0], date[1], date[2]).join('');
    date = day + date.join('').slice(3);

    return date;
  };

  // formats to Jan 1 2017
  var formatMonthFirstDate = function (inputDate) {
    inputDate = inputDate || new Date();

    var inputDate = formatDate(inputDate).split(''); // stringified, arrayed to e.g. '04 Jan 2017'
    var day = Number(inputDate.splice(0, 3).join('')).toString();
    // at this point, input date is 'Jan 2017' in array form
    var addedSpace = false;
    for (var i = 0; i < day.length; i++) {
      if (!addedSpace) {
        inputDate.splice(i+4, 0, ' ');
        addedSpace = true;
      }
      inputDate.splice(i+4, 0, day[i]);
    }

    return inputDate.join('');
  };

  // will return a recent date within the last month
  var randomRecentDate = function () {
    return formatDate(new Date( Date.now() - Math.floor(Math.random() * 2.62e9) ));
  };

  var tomorrow = function () {
    var today = moment();
    var tomorrow = moment(today).add(1, 'day');
    return tomorrow;
  };

  return {
    currentDate: formatDate,
    formatMonthFirstDate: formatMonthFirstDate,
    randomRecentDate: randomRecentDate,
    tomorrow: tomorrow,
    lastUpdatedDate: moment().format('MM/DD/YYYY')
  };
});
