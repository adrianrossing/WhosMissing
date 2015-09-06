(function () {
  'use strict';

  var controllerId = 'LoginController';

  angular
    .module('landing-login-controller-module', [])
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

  //LoginController.$inject = [];

  function LoginController() {
    var vm = this;

    vm.user = {
      password: "",
      userName: ""
      };
    console.log(this);

    vm.tryLogin = function(){

      tempLogin(vm.user.userName, vm.user.password);

    };

    tempLogin = function(userName, password ) {
      Parse.User.logIn(userName, password, {
        success: function (user) {
        },
        error: function (user, error) {
        }
      });
    }

  }
})();
