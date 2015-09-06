(function () {
  'use strict';

  var controllerId = 'RegisterController';

  angular
    .module('landing-register-controller-module', [])
    .controller(controllerId, RegisterController)
    .directive('landingRegister', function () {
      return {
        restrict: 'E',
        controllerAs: 'vm',
        controller: controllerId,
        templateUrl: 'app/landing/register/register.html',
        bindToController: true,
        scope: {
        }
      };
    });

  //LoginController.$inject = [];

  function RegisterController() {
    var vm = this;

    vm.user = {
      password: "",
      nameName: "",
      firstName: "",
      lastName: "",
      email: ""
      };

    vm.tryRegister = function(){

      tempRegister(vm.user.userName, vm.user.password, vm.user.email, vm.user.firstName, vm.user.lastName );



    };



    function tempRegister(userName, password, email, firstName, lastName) {

      var user = new Parse.User();
      user.set("username", userName);
      user.set("password", password);
      user.set("email", email);

      user.set("firstName", firstName);
      user.set("lastName", lastName);

      user.signUp(null, {
        success: function(user) {
          // Hooray! Let them use the app now.
          console.log('hi');
        },
        error: function(user, error) {
          // Show the error message somewhere and let the user try again.
          alert("Error: " + error.code + " " + error.message);
        }
      });
    }

  }
})();
