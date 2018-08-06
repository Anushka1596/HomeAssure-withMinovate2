app.controller('SoldProductListCtrl', ['$scope', '$state', '$stateParams',
  function ($scope, $state, $stateParams) {
    $scope.getdetail = function () {
      $state.go('app.SoldkitProductDetails');
    };
  }]);