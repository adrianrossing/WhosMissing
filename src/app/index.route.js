(function() {
  'use strict';

  angular
    .module('whosMissing')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      //.state('landing', {
      //  url:'/landing',
      //  templateUrl:'app/landing/landing.html',
      //  controller: 'LandingController',
      //  controllerAs: 'vm'
      //})
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      });
  //    .state('home.admin', {
  //      url: '/',
  //      templateUrl: 'app/admin/admin.html',
  //      controller: 'AdminController',
  //      controllerAs: 'vm'
  //});



    $urlRouterProvider.otherwise('/');
  }

})();
