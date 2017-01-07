app.directive('graph', function () {
  return {
    restrict: 'EA',
    controller: 'lineCtrl',
    templateUrl: './src/directives/graph/graph.html'
  };
});
