app.factory('HomeAssureFactory', ['$window', '$q', '$http', '$rootScope', '$state',
  function ($window, $q, $http, $rootScope, $state) {

    return {
      /* Login: function (username, password) {
         var deferred = $q.defer();
         var promise = deferred.promise;
 
         if (username == 'anu' && password == 'anu') {
           deferred.resolve('Welcome ' + username + '!');
         } else {
           deferred.reject('Wrong credentials.');
         }
         promise.success = function (fn) {
           promise.then(fn);
           return promise;
         }
         promise.error = function (fn) {
           promise.then(null, fn);
           return promise;
         }
         return promise;
       }*/


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
          if (data.d == '') {
            deferred.reject('Invalid username or password');
          }
          else {
            deferred.resolve(data);
          }
        }).error(function (error) {
          deferred.resolve(error);
        })
        return deferred.promise;
      },
      forgotPassword: function (username) {
        var deferred = $q.defer();

      }


    }
  }])