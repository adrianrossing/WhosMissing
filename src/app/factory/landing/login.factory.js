//(function() {
//  var factoryId = 'landingLoginFactory';
//  angular
//    .module('landing-login-factory-module', ['ngResource'])
//    .factory(factoryId, landingLoginFactory);
//
//  landingLoginFactory.$inject = ['$q']; //, '$resource'];
//
//  function landingLoginFactory($q) { //, $resource){
//    return {
//      login: login
//    };
//
//    function login() {
//      var deferred = $q.defer();
//      deferred.resolve(
//        Parse.login
//      );
//      return deferred.promise;
//    }
//  }
//
//  function parseLogin(email, password){
//    //Parse.User.logIn("myname", "mypass", {
//    //  success: function(user) {
//    //    // Do stuff after successful login.
//    //  },
//    //  error: function(user, error) {
//    //    // The login failed. Check error to see why.
//    //  }
//    //});
//  }
//
//
//})();
//
