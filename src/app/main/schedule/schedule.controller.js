(function () {
  'use strict';

  var controllerId = 'scheduleController';

  angular
    .module('schedule-controller-module', [])
    .controller(controllerId, scheduleController)
    .directive('userSignIn', function () {
      return {
        restrict: 'E',
        controllerAs: 'vm',
        controller: controllerId,
        templateUrl: 'app/main/schedule/schedule.html',
        bindToController: true,
        scope: {
        }
      };
    });

  scheduleController.$inject = ['$state'];

  function scheduleController($state) {
    var vm = this;
  }
})();
