(function() {
  'use strict';

  angular
    .module('app.tasks')
    .factory('tasksService', tasksService);

  function tasksService($localStorage) {
    initTasks();

    var service = {
      list: list,
      get: get,
      create: create,
      completeTask: completeTask,
      remove: remove,
    };

    return service;

    function initTasks() {
      if (angular.isUndefined($localStorage.tasks)) {
        $localStorage.tasks = [];
      }
    }

    function list() {
      return $localStorage.tasks;
    }

    function get(id) {
      return $localStorage.tasks.filter(function(task) {
        return task.id === id;
      })[0];
    }

    function create(task) {
      $localStorage.tasks.push(task);
    }

    function completeTask(index) {

      if (index !== -1) {
        $localStorage.tasks[index].completed = true;
      }

      return $localStorage.tasks[index];
    }

    function remove(index) {
      $localStorage.tasks.splice(index, 1);
      return $localStorage.tasks;
    }
  }
})();
