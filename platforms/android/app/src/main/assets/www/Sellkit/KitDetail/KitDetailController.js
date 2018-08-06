app.controller('KitDetailCtrl', ['$scope', '$state', '$stateParams',
  function ($scope, $state, $stateParams) {
    $scope.customer = {};
    $scope.kitDetails = {};
    var customer = $stateParams.customer;
    var productList = $stateParams.productList;
    var payment = $stateParams.payment;

    if ($stateParams.Kitdetail != null || $stateParams.Kitdetail != undefined) {
      var kitDetails = $stateParams.Kitdetail;
      $scope.kitDetails = kitDetails;
    }

    var productList = $stateParams.productList;
    if (customer != null || customer != undefined)
      $scope.customer.contact = customer.cust_contact;
    if ($stateParams.kitDetail != null || $stateParams.kitDetail != undefined)
      $scope.kitDetails = $stateParams.kitDetail;

    $scope.gotopayments = function () {
      var kitDetail = {};
      customer.cust_contact = $scope.customer.contact;
      kitDetail.OTP = $scope.kitDetails.OTP;
      kitDetail.activationCode = $scope.kitDetails.activationCode
      $scope.kitDetails = kitDetail;
      $state.go('app.payments', { customer: customer, productList: productList, Kitdetail: $scope.kitDetails, payment: payment });
    };
    $scope.backtoProduct = function () {
      $state.go('app.AddProduct', { customer: customer, productList: productList, Kitdetail: $scope.kitDetails, payment: payment });
    };
    $scope.reset = function () {
      $scope.kitDetails = {};
    }
  }]);