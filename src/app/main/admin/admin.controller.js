(function () {
  'use strict';

  var controllerId = 'AdminController';

  angular
    .module('admin-controller-module', [])
    .controller(controllerId, AdminController)
    .directive('userSignIn', function () {
      return {
        restrict: 'E',
        controllerAs: 'vm',
        controller: controllerId,
        templateUrl: 'app/main/admin/admin.html',
        bindToController: true,
        scope: {
        }
      };
    });

  AdminController.$inject = ['$state'];

  function AdminController($state) {
    var vm = this;
  }
})();
