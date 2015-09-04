//(function () {
//  'use strict';
//
//  var controllerId = 'LandingController';
//  angular
//    .module('landing-controller-module', ['landing-login-controller-module'])
//    .controller(controllerId, LandingController)
//    .directive('landing', function () {
//      return {
//        restrict: 'E',
//        controllerAs: 'vm',
//        controller: controllerId,
//        templateUrl: 'app/landing/landing.html',
//        bindToController: true,
//        scope: {
//        }
//      };
//    });
//
//  LandingController.$inject = []; //, '$scope', 'searchFiltersFactory', 'employeeFactory', 'planYearFactory'];
//
//
//  function LandingController () {
//    var vm = this;
//  }
//})();
