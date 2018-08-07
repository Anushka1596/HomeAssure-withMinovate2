app.controller('SoldProductListCtrl', ['HomeAssureFactory', '$scope', '$state', '$stateParams',
  function (HomeAssureFactory, $scope, $state, $stateParams) {

    $scope.params = {
      'id': '',
      'invoice__user_name': '',
      'invoice__user_contact_no': '',
      'invoice__user_address': '',
      'invoice_id': '',
      'distributer_id': 12345
    }
    var getproductList = function (params) {
      HomeAssureFactory.SVC_SoldKits(params).then(function onSuccess(data) {
        $scope.ProductList = data.results;
        console.log($scope.ProductList);
      }, function onError(error) {
        console.log('error for soldkits');

      })
    };
    $scope.getProductDetail = function (invoiceID) {
      var ID = 70303;
      HomeAssureFactory.SVC_SoldProductDetails(ID).then(function onSuccess(data) {
        $scope.ProductDetails = data.results;
        console.log($scope.ProductDetails);
        $state.go('app.SoldkitProductDetails', { customer: null, productList: null, productDetails: $scope.ProductDetails, Kitdetail: null, payment: null });
      }, function onError(error) {

      })

    };
    getproductList($scope.params);
    // getdetail(70303);
  }]);