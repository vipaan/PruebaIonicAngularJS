(function() {
  'use strict';
  var core = angular.module('app.core');
  core.config(config);

  /* @ngInject */
  function config($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'js/app/features/menu/menu.html',
      })

      .state('app.settings', {
        url: '/settings',
        cache: false,
        views: {
          content: {
            templateUrl: 'js/app/features/settings/settings.html',
            controller: 'settingsController',
            controllerAs: 'vm',
          },
        },
      })

    $urlRouterProvider.otherwise('/app/tasks');
  }
})();
