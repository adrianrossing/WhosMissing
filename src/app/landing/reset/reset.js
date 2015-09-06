(function () {
  'use strict';

  var controllerId = 'ResetController';

  angular
    .module('landing-reset-controller-module', [])
    .controller(controllerId, ResetController)
    .directive('landingReset', function () {
      return {
        restrict: 'E',
        controllerAs: 'vm',
        controller: controllerId,
        templateUrl: 'app/landing/reset/reset.html',
        bindToController: true,
        scope: {
        }
      };
    });

  //ResetController.$inject = [];

  function ResetController() {
    var vm = this;

    vm.resetPassword = false;
    vm.user = {
      email: ""
    };
    console.log(this);
    vm.tryReset = function(){
      Parse.User.logIn(vm.user.email, {
        success: function(user) {
        },
        error: function(user, error) {
        }
      });
    };


    activate();

    function activate() {
    }

  }
})();
