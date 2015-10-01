(function () {
  'use strict';

  var factoryId = 'LandingFactory';
  angular
    .module('landing-factory-module', ['ngResource'])
    .factory(factoryId, LandingFactory);

  LandingFactory.$inject = ['$resource', '$q'];

  function LandingFactory($resource, $q) {

    return {
      //landingLogin: landingLogin,
      landingRegister: landingRegister,
      landingForgotPassword: landingForgotPassword,
      handleParseError: handleParseError
    };

    //***************************************************//

    //function landingLogin(userName, password) {
    //  Parse.User.logIn(userName, password, {
    //    success: function (user) {
    //      console.log(user);
    //      return user;
    //    },
    //    error: function (user, error) {
    //    }
    //  });
    //}

    function landingRegister(){

    }

    function landingForgotPassword(){

    }


    function handleParseError(err) {
      switch (err.code) {
        case Parse.Error.INVALID_SESSION_TOKEN:
          Parse.User.logOut();
          console.log("BROKE");
          break;
      }
    }

  }
})();
