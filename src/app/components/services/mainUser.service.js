(function () {
  'use strict';

  var serviceId = 'MainUserService';

  angular
    .module('main-user-service-module', [])
    .service(serviceId, MainUserService);

  MainUserService.$inject = ['$q'];

  function MainUserService($q) {
    var vm = this;
    vm.currentUser = {};
    vm.buildCurrentUser = function(parseUser){
      vm.currentUser.isSignedIn = false;
      //do parse query here to get user information
    }

  }
})();
