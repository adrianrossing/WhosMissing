(function() {
  'use strict';

  angular
    .module('whosMissing')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('landing', {
        url: '/landing',
        templateUrl: 'app/landing/landing.html',
        controller: 'LandingController',
        controllerAs: 'vm'
      })

      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })

      .state('home.schedule', {
        url: '/',
        templateUrl: 'app/main/schedule/schedule.html',
        controller: 'ScheduleController',
        controllerAs: 'vm'
      })

      .state('home.tourTalk', {
        url: '/',
        templateUrl: 'app/main/tourTalk/tourTalk.html',
        controller: 'TourTalkController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('landing');
  }

})();
