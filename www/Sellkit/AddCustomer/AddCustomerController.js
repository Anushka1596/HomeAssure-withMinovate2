app.controller('AddCustomerCtrl', ['$scope', '$state', '$stateParams',
  function ($scope, $state, $stateParams) {
    $scope.customer = {};
    var kitDetail = $stateParams.Kitdetail;
    var payment = $stateParams.payment;
    var productList = $stateParams.productList;
    if ($stateParams.customer != null || $stateParams.customer != undefined) {
      $scope.customer = $stateParams.customer;
      console.log($scope.customer);
    }
    $scope.Save = function () {
      $state.go('app.AddProduct');
    }
    $scope.reset = function () {
      $scope.customer = {};
    }
    $scope.saveCustomer = function () {
      var customer = {};
      customer.cust_name = $scope.customer.cust_name;
      customer.cust_contact = $scope.customer.cust_contact;
      customer.cust_state = $scope.customer.cust_state;
      customer.cust_city = $scope.customer.cust_city;
      customer.cust_address = $scope.customer.cust_address;
      customer.cust_pin = $scope.customer.cust_pin;
      $scope.customer = customer;
      //console.log(customer);
      var kitDetail = $stateParams.Kitdetail;
      $state.go('app.AddProduct', { customer: $scope.customer, productList: productList, Kitdetail: kitDetail, payment: payment });
    }

  }])