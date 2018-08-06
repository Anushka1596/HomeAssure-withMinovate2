app.controller('AddProductCtrl', ['$scope', '$state', '$stateParams', '$rootScope',
  function ($scope, $state, $stateParams, $rootScope) {
    $scope.Products = [];
    var customer = $stateParams.customer;
    var kitDetail = $stateParams.Kitdetail;
    var payment = $stateParams.payment;
    if ($stateParams.productList != null || $stateParams.productList != undefined) {
      $scope.Products = $stateParams.productList;
    }
    $scope.reset = function () {
      $scope.Products = [];
    }
    $scope.addProduct = function () {
      //console.log($scope.Products);
      $state.go('app.AddProductDetails', { customer: customer, productList: $scope.Products, Kitdetail: kitDetail, payment: payment });
    }
    $scope.gotokit = function () {
      $state.go('app.kitDetail', { customer: customer, productList: $scope.Products, Kitdetail: kitDetail, payment: payment });
    }
    $scope.backtoCustomer = function () {
      $state.go('app.AddCustomer', { customer: customer, productList: $scope.Products, Kitdetail: kitDetail, payment: payment });
    }
  }])