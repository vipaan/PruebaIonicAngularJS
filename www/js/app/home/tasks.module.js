(function() {
  'use strict';

  angular
    .module('app.tasks', [])
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider

        .state('app.tasks', {
          url: '/tasks',
          cache: false,
          views: {
            content: {
              templateUrl: 'js/app/home/tasks/tasks.html',
              controller: 'TasksController',
              controllerAs: 'vm',
            },
          },
        });

    });
})();
