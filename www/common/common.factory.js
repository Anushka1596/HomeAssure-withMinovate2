app.factory('HomeAssureFactory', ['$window', '$q', '$http', '$rootScope', '$state',
  function ($window, $q, $http, $rootScope, $state) {

    return {
      Login: function (username, password) {
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
      }

    }
  }])