(function () {
  'use strict';

  var controllerId = 'TopNavController';

  angular
    .module('top-nav-controller-module', [])
    .controller(controllerId, TopNavController)
    .directive('topNav', function () {
      return {
        restrict: 'E',
        controllerAs: 'vm',
        controller: controllerId,
        templateUrl: 'app/main/topNav/topNav.html',
        bindToController: true,
        scope: {
          userAttributes:"="
        }
      };
    });

  TopNavController.$inject = ['$state'];

  function TopNavController($state) {//common, $rootScope, $location) {
    var vm = this;
console.log(vm);
    vm.logout = function() {
      Parse.User.logOut();
      $state.go('landing');
    }

  }
})();
