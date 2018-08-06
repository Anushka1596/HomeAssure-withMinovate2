
app.controller('SoldProductDetailsCtrl', ['HomeAssureFactory', '$scope', '$state', '$stateParams',
  function (HomeAssureFactory, $scope, $state, $stateParams) {
    $scope.backtosold = function () {
      $state.go('app.SoldkitList');
    };
    $scope.getProductDetail = function () {
      HomeAssureFactory.SVC_ProductDetails()
        .then(function (data) {

        }, function (error) {

        })
    }

  }]);