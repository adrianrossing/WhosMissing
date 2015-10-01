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
    vm.state;

    vm.logout = function() {
      Parse.User.logOut();
      $state.go('landing');
    };

    vm.navigateTo = function(location) {
      switch (location) {
        case "checkIn":
          vm.state = "checkIn";
          //$state.go('home');
          break;
        case "schedule":
          vm.state = "checkIn";
          $state.go('home.schedule');
          break;
        case "tourTalk":
          vm.state = "tourTalk";
          $state.go('home.tourTalk');
          break;
        case "admin" :
          vm.state = "admin";
          $state.go('home.admin');
          break;



      }
    }

  }
})();
