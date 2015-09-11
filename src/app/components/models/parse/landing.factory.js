(function () {
  'use strict';

  var factoryId = 'LandingFactory';
  angular
    .module('landing-factory-module', ['ngResource'])
    .factory(factoryId, LandingFactory);

  LandingFactory.$inject = ['$resource', '$q'];

  function LandingFactory($resource, $q) {

    return {
      landingLogin: landingLogin,
      landingRegister: landingRegister,
      landingForgotPassword: landingForgotPassword
    };

    //***************************************************//

    function landingLogin(userName, password) {
      Parse.User.logIn(userName, password, {
        success: function (user) {
          console.log(user);
          return user;
        },
        error: function (user, error) {
        }
      });
    }

    function landingRegister(){

    }

    function landingForgotPassword(){

    }

  }
})();
