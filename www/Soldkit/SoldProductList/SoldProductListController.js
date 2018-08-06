app.controller('SoldProductListCtrl', ['HomeAssureFactory', '$scope', '$state', '$stateParams',
  function (HomeAssureFactory, $scope, $state, $stateParams) {
    $scope.productList = function () {
      HomeAssureFactory.SVC_ProductDetails()
        .then(function (data) {
          $scope.ProductList = data;
        })
    }
    $scope.getdetail = function () {
      HomeAssureFactory.SVC_ProductDetails()
        .then(function (data) {
          $scope.ProductList = data;
        }, function (error) {

        })
      $state.go('app.SoldkitProductDetails');
    };
  }]);