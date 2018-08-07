
app.controller('SoldProductDetailsCtrl', ['HomeAssureFactory', '$scope', '$state', '$stateParams',
  function (HomeAssureFactory, $scope, $state, $stateParams) {
    $scope.productDetail = $stateParams.productDetails;
    $scope.backtosold = function () {
      $state.go('app.SoldkitList', { customer: null, productList: null, productDetails: null, Kitdetail: null, payment: null });
    };
    $scope.getProductDetail = function () {
      HomeAssureFactory.SVC_ProductDetails()
        .then(function (data) {

        }, function (error) {

        })
    }

  }]);