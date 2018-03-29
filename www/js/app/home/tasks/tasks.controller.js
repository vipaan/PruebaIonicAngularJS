(function() {
  'use strict';

  angular
    .module('app.tasks')
    .controller('TasksController', TasksController);

  function TasksController($scope, tasksService, $ionicModal, $ionicPopup, $translate) {
    var vm = this;

    vm.hiddenSearch = hiddenSearch;
    vm.popup = popup;
    vm.task = {};
    vm.closeTaskModal = closeTaskModal;
    vm.completeTask = completeTask;
    vm.removeTask = removeTask;

    $scope.$on('$ionicView.beforeEnter', function() {
      initView();
    });

    function initView() {
      vm.tasks = tasksService.list();
      vm.show = false;
    }

    function hiddenSearch() {
      if (vm.show) {
        vm.show = false;
        initView();
      } else {
        vm.show = true;
      }
    }

    function popup() {
      $ionicModal.fromTemplateUrl('js/app/home/components/modal/modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        vm.newTaskModal = modal;
        vm.newTaskModal.show();
      });

    }

    function closeTaskModal() {
      vm.newTaskModal.remove();
    }

    function getTasks() {
      //fetches task from local storage
      tasksService.list();
    }

    function createTask(task) {
      //creates a new task
      tasksService.create(task);
      closeTaskModal();
    }

    function removeTask($index) {
       var options = {
          title: $translate.instant('task-delete-title'),
          template: $translate.instant('be-sure'),
          okText: $translate.instant('accept'),
          cancelText: $translate.instant('cancel')
       };


      //removes a task
      $ionicPopup.confirm(options)
      .then(function(res) {
         if(res) {
            tasksService.remove($index);
         } else {

         }
      });

    }

    function completeTask($index) {
      //updates a task as completed
      tasksService.completeTask($index);
    }
  }
})();
