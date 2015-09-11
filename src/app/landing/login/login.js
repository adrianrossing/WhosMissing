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

    vm.successfullyLoggedIn = false;

    vm.tryLogin = function() {
      if (Parse.User.current)
      {
        //landingService.landingLogin(vm.user.userName, vm.user.password);

        Parse.User.logIn(vm.user.userName, vm.user.password, {
          success: function (user) {
            console.log('good');
            vm.successfullyLoggedIn = true;
            console.log(vm);
            //return user;
          },
          error: function (error) {
            console.log('bad');
            //landingFactory.handleParseError(error);
          }
        });
      }

    };

    vm.navigateToHome = function(){

    }

  }
})();
