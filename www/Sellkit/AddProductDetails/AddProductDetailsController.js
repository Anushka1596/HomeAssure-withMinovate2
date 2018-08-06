app.controller('AddProductDetailsCtrl', ['$scope', '$state', '$stateParams', '$rootScope',
  function ($scope, $state, $stateParams, $rootScope) {
    $scope.product = {};

    var customer = $stateParams.customer;
    var kitDetail = $stateParams.Kitdetail;
    var payment = $stateParams.payment;
    if ($stateParams.productList != null || $stateParams.productList != undefined) {
      $scope.productList = $stateParams.productList;
    }
    else {
      $scope.productList = [];
    }

    $scope.backToList = function () {
      $state.go('app.AddProduct', { customer: customer, productList: $scope.productList, Kitdetail: kitDetail, payment: payment });
    };
    $scope.newProduct = {};
    $scope.reset = function () {
      $scope.newProduct = {};
    };
    $scope.productAdded = function () {
      newProduct = {};
      newProduct.prod_category = $scope.product.category;
      newProduct.prod_InvoiceAvailable;
      newProduct.prod_BrandName = $scope.product.brandName;
      newProduct.prod_BrandOthers = $scope.product.brandOthers;
      newProduct.prod_BrandText = $scope.product.brandText;
      newProduct.prod_ModelName = $scope.product.modelName;
      newProduct.prod_ModelOthers = $scope.product.modelOthers;
      newProduct.prod_ModelText = $scope.product.modelText;
      newProduct.prod_PurchaseDate = $scope.product.purchaseDate;
      newProduct.prod_SerialNo = $scope.product.serialno;
      newProduct.prod_price = $scope.product.price;
      //$scope.product = newProduct;
      console.log(newProduct);
      $scope.productList.push(newProduct);



      $state.go('app.AddProduct', { customer: customer, productList: $scope.productList, Kitdetail: kitDetail, payment: payment });
    }
  }]);