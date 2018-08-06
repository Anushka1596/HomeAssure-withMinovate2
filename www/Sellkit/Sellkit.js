app.controller('SellkitCtrl', ['$scope', '$state', function ($scope, $state) {
  $scope.addCustomer = function () {
    $state.go('app.Sellkit.AddCustomer');
  }
  $scope.addproduct = function () {
    $state.go('app.Sellkit.AddProduct');
  }
  $scope.kitdetails = function () {
    $state.go('app.Sellkit.kitDetail');
  }
  $scope.payments = function () {
    $state.go('app.Sellkit.payments');
  }

}])