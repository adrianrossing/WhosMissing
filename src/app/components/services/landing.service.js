/**
 * Created by ROSSADR on 9/6/2015.
 */
(function () {
  'use strict';

  var serviceId = 'LandingService';

  angular
    .module('landing-service-module', ['landing-factory-module'])
    .service(serviceId, LandingService);

  LandingService.$inject = ['$q', 'LandingFactory'];

  function LandingService($q, landingFactory) {
    var vm = this;
    this.$q = $q;
    this.landingFactory = landingFactory;


    this.landingLogin = function (userName, password) {
      Parse.User.logIn(userName, password, {
        success: function (user) {
          console.log(user);
          return user;
        },
        error: function (user, error) {
          console.log(error);
        }
      });
    }
  }
})();
