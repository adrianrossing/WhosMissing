(function () {
  'use strict';

  var controllerId = 'UserSignInController';

  angular
    .module('user-sign-in-controller-module', ['test-factory-module'])
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

  UserSignInController.$inject = ['$state', 'TextFactory'];

  function UserSignInController($state, TextFactory) {
    var vm = this;
    TextFactory.getCalendarEvents("Viking Theater").then(
      function(results) {
        vm.events = results;
      }, function (error) {
        //dumb
    });

    console.log(vm);
  }
})();
