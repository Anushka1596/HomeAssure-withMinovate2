app.controller('LoginCtrl', ['HomeAssureFactory', '$scope', '$timeout', '$ionicModal', '$ionicSideMenuDelegate', '$state', '$ionicPopup',
  function (HomeAssureFactory, $scope, $timeout, $ionicModal, $ionicSideMenuDelegate, $state, $ionicPopup) {

    $scope.data = {};
    var username = $scope.data.username;
    var password = $scope.data.password;
    // console.log(username);
    //console.log(password);
    $scope.login = function () {
      HomeAssureFactory.Login($scope.data.username, $scope.data.password)
        .then(function (data) {
          $state.go('app.home');

        }, function (error) {
          var alertPopup = $ionicPopup.alert({
            title: 'Login failed!',
            template: 'Please check your credentials!'
          });
          $scope.data = {};
        });
    }

    $scope.forgetpwd = function () {

    }
  }])