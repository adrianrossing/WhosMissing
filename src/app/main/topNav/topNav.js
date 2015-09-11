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
          //Placeholder for any dependencies needed by this directive.
        }
      };
    });

  //TopNavController.$inject = ['common', '$rootScope', '$location'];

  function TopNavController() {//common, $rootScope, $location) {
    var vm = this;
    vm.hi = function(){
    };

  }
})();
