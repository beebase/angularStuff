angular.module('app')
  .factory('LocalJsonFactory', function() {
    var storageKey = 'todoApp';
    var data = JSON.parse(localStorage.getItem(storageKey)) || {};

    return {
      getCollection   : function(key) {
        //key can be 'todos'
        return data[key];
      },
      setCollection   : function(key, value) {
        //key is 'todos', value is vm.todos
        data[key] = value;
        // to store , stringify first;
        localStorage.setItem(storageKey, JSON.stringify(data));
      },
      removeCollection: function(key) {
        data[key] = undefined;
        localStorage.setItem(storageKey, JSON.stringify(data));
      }
    }
  })
  .controller('LocalJsonCtrl', function($rootScope, LocalJsonFactory, $timeout) {
    var vm = this;
    vm.todos = LocalJsonFactory.getCollection('todos') || [];
    vm.addTodo = function() {
      vm.todos.push({
        id       : new Date(),
        label    : vm.currentTodo,
        completed: false
      });
      vm.currentTodo = undefined;
      LocalJsonFactory.setCollection('todos', vm.todos);
    };
    vm.saveTodo = function() {
      $timeout(function() {
        LocalJsonFactory.setCollection('todos', vm.todos);
      })
    };
    vm.removeTodo = function(index) {
      vm.todos.splice(index, 1);
      LocalJsonFactory.removeCollection('todos');
    };
    vm.totalTodos = function() {
      return vm.todos.length;
    };
    vm.completedTodos = function() {
      var count = 0;
      vm.todos.forEach(function(item) {
        if (item.completed) {
          count += 1;
        }
      });
      return count;
    };
    vm.uncompletedTodos = function() {
      return vm.todos.length - vm.completedTodos();
    };
  });