(function () {
  'use strict';

  var serviceId = 'MainUserService';

  angular
    .module('main-user-service-module', ['user-factory-module'])
    .service(serviceId, MainUserService);

  MainUserService.$inject = ['$q', 'UserFactory'];

  function MainUserService($q, UserFactory) {
    var vm = this;
    vm.currentUser = {};
    vm.buildCurrentUser = function(parseUser){
      console.log(parseUser);
      UserFactory.getCurrentUserProperties(parseUser.id).then(
        function(results) {
          console.log(results);
          vm.currentUser.properties = results;
        }, function (error) {
          //dumb
        });



      vm.currentUser.isSignedIn = false;
      vm.currentUser.groupName = "St. Olaf Orchestra";
      vm.currentUser.eventName = "West Coast Tour";
      //do parse query here to get user information
    }

  }
})();
