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
        $scope.ProductList = data;
        console.log('success');
      }, function onError(error) {
        console.log('error');
        alert(error);
      })
    };
    var getdetail = function (invoiceID) {
      HomeAssureFactory.SVC_SoldProductDetails(invoiceID).then(function onSuccess(data) {
        $scope.ProductDetails = data;
        console.log($scope.ProductDetails)
        $state.go('app.SoldkitProductDetails', { customer: null, productList: null, productDetails: $scope.ProductDetails, Kitdetail: null, payment: null });
      }, function onError(error) {
        alert(error);
      })

    };
    getproductList($scope.params);
    getdetail(70303);
  }]);