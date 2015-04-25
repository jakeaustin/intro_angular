var module = angular.module('todoApp', []);

module.controller('mainController', function($scope, $http) {
  $scope.formData = {};

  $scope.createTodo = function() {
    $http.post('/api/todos', $scope.formData).success(function(d) {
      $scope.formData = {};
      $scope.todos = d;
    }).error(function(e) {
      console.log('Error ' + e);
    });
  };

  $scope.deleteTodo = function(id) {
    $http.delete('api/todos/' + id)
    .success(function(d) {
      $scope.todos = d;
    }).error(function(e) {
      console.log('Error ' + e);
    });
  };
  $http.get('/api/todos').success(function(d) {
    $scope.todos = d;
  }).error(function(e) {
    console.log('Error ' + e);
  });


});

