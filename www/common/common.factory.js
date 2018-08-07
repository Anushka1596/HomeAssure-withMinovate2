app.factory('HomeAssureFactory', ['$window', '$q', '$http', '$rootScope', '$state',
  function ($window, $q, $http, $rootScope, $state) {

    return {
      Login: function (username, password) {
        var deferred = $q.defer();
        $http({
          method: 'POST',
          url: 'http://stg-assure.zopper.com/rms/user/login/',
          //contentType: 'application/x-www-form-urlencoded',
          headers: {
            'x-api-version': '1.1',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          //data: { 'username': username, 'password': password },
          data: encodeURI('username=' + username + '&password=' + password),
        }).success(function (data) {
          console.log(data);
          if (data.d == '') {
            deferred.reject('Invalid username or password');
          }
          else {
            deferred.resolve(data);
          }
        }).error(function (error) {
          //var errorMSg = 'Invalid Credentials'
          deferred.reject('Invalid username or password');
        })
        return deferred.promise;
      },
      forgotPassword: function (username) {
        var deferred = $q.defer();

      },
      SVC_SoldKits: function (params) {
        var deferred = $q.defer();
        var promise = $http({
          method: 'GET',
          url: 'http://stg-assure.zopper.com/rms/home_assure/',

          data: params
        }).success(function (data) {
          deferred.resolve(data);
          console.log('success');
        }).error(function (data) {
          deferred.reject(data);
          console.log('error');
        });
        return deferred.promise;
      },
      SVC_SoldProductDetails: function (invoiceID) {
        var ID = invoiceID;
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url: 'http://stg-assure.zopper.com/rms/home_assure/' + ID + '/product_details/'

        }).success(function (data) {
          deferred.resolve(data);
          console.log(data);
        }).error(function (data) {
          deferred.reject();
        });
        return deferred.promise;
      },
      SVC_AddCustomer: function (params) {
        var deferred = $q.defer();
        $http({
          method: 'POST',
          url: 'http://stg-assure.zopper.com/rms/home_assure/',
          data: encodeURI(params)

        }).success(function (data) {
          deferred.resolve(data);
        }).error(function (data) {
          deferred.reject();
        })
        return deferred.promise;
      },
      SVC_sendOTP: function () {
        var deferred = $q.defer();
        $http({
          method: '',
          url: '',
          headers: {

          },
          data: ''
        }).success(function (data) {

        }).error(function (data) {

        })
        return deferred.promise;
      }

    }
  }])