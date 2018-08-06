app.controller('AccountCtrl', ['$scope', '$state', '$ionicPopup',
  function ($scope, $state, $ionicPopup) {
    $scope.logout = function () {
      $ionicPopup.show({
        template: "Logout",
        title: "Are you sure ?",
        buttons: [
          {
            text: "Yes",
            onTap: function (e) {
              $state.go('login');
            }
          },
          {
            text: "No",
            onTap: function (e) {
              return false;
            }
          },
        ]
      });

    }
  }])