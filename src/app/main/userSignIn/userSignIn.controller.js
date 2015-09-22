(function () {
  'use strict';

  var controllerId = 'UserSignInController';

  angular
    .module('user-sign-in-controller-module', [])
    .controller(controllerId, UserSignInController)
    .directive('userSignIn', function () {
      return {
        restrict: 'E',
        controllerAs: 'vm',
        controller: controllerId,
        templateUrl: 'app/main/userSignIn/userSignIn.html',
        bindToController: true,
        scope: {
          userAttributes:"=",
          currentUser:"="
        }
      };
    });

  UserSignInController.$inject = ['$state'];

  function UserSignInController($state) {
    var vm = this;
  }
})();
