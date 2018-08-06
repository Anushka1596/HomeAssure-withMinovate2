app.controller('HomeCtrl', function ($scope) {
  $scope.message = "Hello world";
  $scope.fixedSettings = {
    theme: 'material-dark',
    layout: 'fixed',
    itemWidth: 80
  };
})