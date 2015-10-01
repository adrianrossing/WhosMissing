(function () {
  'use strict';

  var factoryId = 'TextFactory';
  angular
    .module('test-factory-module', ['ngResource'])
    .factory(factoryId, TextFactory);

  TextFactory.$inject = ['$resource', '$q'];

  function TextFactory($resource, $q) {
    var calendar = Parse.Object.extend("Calendar", {
      // Instance methods
    }, {
      getCalendarEvents : function(location) {
        var defer = $q.defer();

        var query = new Parse.Query(this);
        query.equalTo("Location", location);
        query.find({
          success : function(aPresentations) {
            defer.resolve(aPresentations);
          },
          error : function(aError) {
            defer.reject(aError);
          }
        });

        return defer.promise;
      }
    });

    return calendar

  }
})();


