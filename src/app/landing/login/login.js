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

  LoginController.$inject = ['LandingService', '$state'];

  function LoginController(LandingService, $state) {
    var vm = this;

    vm.user = {
      password: "",
      userName: ""
      };

    activate();

    vm.failedToLogin = false;

    function activate() {
      if (Parse.User.current()) {
        $state.go('home');
      }
    }


    vm.tryLogin = function() {
      if (Parse.User.current()) {
        Parse.User.logOut();
      }

      Parse.User.logIn(vm.user.userName, vm.user.password, {
        success: function (user) {
          $state.go('home');
        },
        error: function (error) {
          vm.handleFailure();
          //landingFactory.handleParseError(error);
        }
      });
    };

    vm.handleFailure = function() {
      vm.failedToLogin = true; //TODO: doesn't work :(
    };

  }
})();
