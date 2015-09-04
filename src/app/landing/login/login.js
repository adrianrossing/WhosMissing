/**
 * Created by ROSSADR on 9/4/2015.
 */

/**
 * Created by ROSSADR on 9/4/2015.
 */
(function () {
  'use strict';

  var controllerId = 'LoginController';

  angular
    .module('landing-login-controller-module', [])
    .controller(controllerId, LoginController)
    .directive('landingLogin', function () {
      return {
        restrict: 'E',
        controllerAs: 'vm',
        controller: controllerId,
        templateUrl: 'app/landing/login/login.html',
        bindToController: true,
        scope: {
        }
      };
    });

  //LoginController.$inject = [];

  function LoginController() {
    var vm = this;
    //
    //vm.user = {
    //  password = "",
    //  name = ""
    //  };
    //
    //vm.tryLogin = function(){
    //  console.log(this);
    //}
    //
    //
    //activate();
    //
    //function activate() {
    //}

  }
})();
