(function() {
  'use strict';

  angular
    .module('main-controller-module', [])
    .controller('MainController', MainController);
  function MainController(){
    var vm = this;

    vm.userAttributes = Parse.User.current().attributes;
  }
})();
