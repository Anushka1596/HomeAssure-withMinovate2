
app.controller('SoldProductDetailsCtrl', ['$scope', '$state', '$stateParams',
  function ($scope, $state, $stateParams) {
    $scope.backtosold = function () {
      $state.go('app.SoldkitList');
    };

  }]);