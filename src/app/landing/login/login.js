(function () {
  'use strict';

  var controllerId = 'LoginController';

  angular
    .module('landing-login-controller-module', ['landing-service-module'])
    .controller(controllerId, LoginController)
    .directive('landingLogin', function () {
      return {
        restrict: 'E',
        controllerAs: 'vm',
        controller: controllerId,
        templateUrl: 'app/landing/login/login.html',
        bindToController: true,
        scope: {
        }
      };
    });

  LoginController.$inject = ['LandingService'];

  function LoginController(landingService) {
    var vm = this;

    vm.user = {
      password: "",
      userName: ""
      };

    vm.tryLogin = function() {
      landingService.landingLogin(vm.user.userName, vm.user.password);
      console.log('hi');
    };

  }
})();
