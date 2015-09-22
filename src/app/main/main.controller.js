(function() {
  'use strict';

  angular
    .module('main-controller-module', ['user-sign-in-controller-module', 'main-user-service-module'])
    .controller('MainController', MainController);

  MainController.$inject = ['MainUserService'];

  function MainController(MainUserService){
    var vm = this;

    vm.userAttributes = Parse.User.current().attributes;
    vm.mainUserService = MainUserService;
    vm.mainUserService.buildCurrentUser(Parse.User.current());
    console.log(vm);
  }
})();
