(function() {
  'use strict';

  angular
    .module('app.tasks')
    .controller('ModalController', ModalController);

  function ModalController($scope, tasksService, $ionicModal) {

    $scope.createTask = createTask;

    function createTask(task, vm) {
      //creates a new task
      if(task){
        tasksService.create(task);
        vm.closeTaskModal();
      }
    }

  }
})();
