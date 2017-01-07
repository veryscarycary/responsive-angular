app.controller('mainCtrl', function($scope, dates, sales) {
  $scope.movies = [
    {
      title: 'Movie 1',
      releaseDate: dates.randomRecentDate(),
      totalOrders: 2346,
      totalSales: 61002,
      salesRegion: 'United States'
    },
    {
      title: 'Movie 2',
      releaseDate: dates.randomRecentDate(),
      totalOrders: 4422,
      totalSales: 98444,
      salesRegion: 'United States'
    }
  ];
  $scope.allSales = sales.allSales;

  $scope.formatMonthFirstDate = dates.formatMonthFirstDate;
  $scope.tomorrow = dates.tomorrow;
});
