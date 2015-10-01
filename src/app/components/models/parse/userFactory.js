(function () {
  'use strict';

  var factoryId = 'UserFactory';
  angular
    .module('user-factory-module', ['ngResource'])
    .factory(factoryId, UserFactory);

  UserFactory.$inject = ['$resource', '$q'];

  function UserFactory($resource, $q) {
    var user = Parse.Object.extend("User", {
      // Instance methods
    }, {
      getCurrentUserProperties : function(userID) {
        var defer = $q.defer();
        var query = new Parse.Query(this);
        query.equalTo("id", userID);
        query.find({
          success : function(result) {
            defer.resolve(result);
          },
          error : function(aError) {
            defer.reject(aError);
          }
        });

        return defer.promise;
      }
    });

    return user;
  }
})();


