(function() {
  'use strict';

  angular
    .module('app.tasks')
    .directive('modalDirective', modalDirective);

  function modalDirective() {
    return {
      restrict: 'EA',
      templateUrl: 'js/app/home/components/modal/modal.html',
      scope: {
        list: '=',
        cleanInput: '=',
      },
      replace: true,
      controller: controller,
    };

    function controller($scope, tasksService) {
      $scope.onSearchChange = onSearchChange;

      function onSearchChange() {
        if ($scope.cleanInput) {
          $scope.list = tasksService.list().filter(function(elem) {
            return elem.title.toLowerCase().indexOf($scope.search.toLowerCase()) > -1 ||
              elem.description.toLowerCase().indexOf($scope.search.toLowerCase()) > -1;
          });
        } else {
          return $scope.list = tasksService.list();
        }
      }
    }
  }
})();
