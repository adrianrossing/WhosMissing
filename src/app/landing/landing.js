/**
 * Created by ROSSADR on 9/4/2015.
 */
(function () {
  'use strict';

  var controllerId = 'LandingController';

  angular
    .module('landing-controller-module', ['landing-login-controller-module'])
    .controller(controllerId, LandingController)
    .directive('landing', function () {
      return {
        restrict: 'E',
        controllerAs: 'vm',
        controller: controllerId,
        templateUrl: 'app/main/landing/landing.html',
        bindToController: true,
        scope: {
          //Placeholder for any dependencies needed by this directive.
        }
      };
    });

  //LandingController.$inject = [];

  function LandingController() {

  }
})();
