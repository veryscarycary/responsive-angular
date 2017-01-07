app.directive('movie', function() {
  return {
    restrict: 'EA',
    scope: true,
    templateUrl: './src/directives/movie/movie.html'
  };
});
