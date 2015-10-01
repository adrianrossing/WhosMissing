(function () {
  'use strict';

  var controllerId = 'TourTalkController';

  angular
    .module('tour-talk-controller-module', [])
    .controller(controllerId, TourTalkController)
    .directive('tourTalk', function () {
      return {
        restrict: 'E',
        controllerAs: 'vm',
        controller: controllerId,
        templateUrl: 'app/main/tourTalk/tourTalk.html',
        bindToController: true,
        scope: {
        }
      };
    });

  TourTalkController.$inject = ['$state'];

  function TourTalkController($state) {
    var vm = this;
  }
})();
