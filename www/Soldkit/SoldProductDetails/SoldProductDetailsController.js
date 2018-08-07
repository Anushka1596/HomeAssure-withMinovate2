
app.controller('SoldProductDetailsCtrl', ['HomeAssureFactory', '$scope', '$state', '$stateParams',
  function (HomeAssureFactory, $scope, $state, $stateParams) {
    //console.log($stateParams.productDetails);
    $scope.ProductDetail = [];
    if ($stateParams.productDetails != null || $stateParams.productDetails != undefined) {
      $scope.ProductDetail = $stateParams.productDetails;
      console.log($scope.ProductDetail);
    }
    /*$scope.data = $stateParams.productDetails;
      console.log($scope.data);
      for (i = 0; i < $scope.data.results.length; i++) {
        $scope.productDetail.push($scope.data.results[i])
        $scope.id.push($scope.productDetail[i].id)
        console.log($scope.productDetail[i].id);
      }
    }*/

    $scope.backtosold = function () {
      $state.go('app.SoldkitList', { customer: null, productList: null, productDetails: null, Kitdetail: null, payment: null });
    };


  }]);