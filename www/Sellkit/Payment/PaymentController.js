app.controller('PaymentCtrl', ['$scope', '$state', '$stateParams', '$ionicPopup',
  function ($scope, $state, $stateParams, $ionicPopup) {
    var customer = $stateParams.customer;
    var productList = $stateParams.productList;
    var kitDetails = $stateParams.Kitdetail;
    $scope.paymentDetail = {};
    if ($stateParams.payment != null || $stateParams.payment != undefined)
      $scope.paymentDetail = $stateParams.payment

    $scope.submit = function () {
      var paymentDetails = {};
      paymentDetails.pay_method = $scope.paymentDetail.pay_method;
      paymentDetails.pay_amount = $scope.paymentDetail.pay_amount;
      paymentDetails.pay_comment = $scope.paymentDetail.pay_comment;
      $scope.paymentDetail = paymentDetails;
      console.log(customer);
      console.log(productList);
      console.log(kitDetails);
      console.log(paymentDetails);
      var alertPopup = $ionicPopup.alert({
        title: 'Successful!',
        template: 'Data Saved Successfully!'
      });

    }
    $scope.backtokit = function () {
      $state.go('app.kitDetail', { customer: customer, productList: productList, Kitdetail: kitDetails, payment: $scope.paymentDetail });
    };
    $scope.reset = function () {
      $scope.paymentDetails = {};
    }

  }]);