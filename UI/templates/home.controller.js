app.controller("TodoController", function ($scope, TodoService, $filter) {
  $scope.idEdit = false;
  $scope.todo = {};

  $scope.formData = {}; // Initialize form data object
  // rest of the controller code

  $scope.getData = function () {
    TodoService.getAll().then(function (response) {
      $scope.todos = response.data.data;
    });
  };

  $scope.getData();

  // Add new todo
  $scope.addTodo = function () {
    TodoService.create($scope.newTodo).then(function (response) {
      $scope.todos.push(response.data.data);
      alert(response.data.message);
      $scope.newTodo = ""; // Clear input field
    });
  };

  // Update todo
  $scope.updateTodo = function () {
    let payload = {
      description: $scope.newTodo.description,
      dueDate: $scope.newTodo.dueDate,
      priority: $scope.newTodo.priority,
      status: $scope.newTodo.status,
      title: $scope.newTodo.title,
    };
    TodoService.update($scope.todo._id, payload).then(function (response) {
      // Handle success

      if (response) {
        $scope.idEdit = false;
        alert(response.data.message);
        $scope.getData();
        $scope.newTodo = {};
      }
    });
  };

  $scope.editTodo = function (todo) {
    $scope.idEdit = true;
    $scope.todo = todo;
    $scope.newTodo = angular.copy(todo); // Copy todo data to formData object
  };

  // Delete todo
  $scope.deleteTodo = function (todo) {
    TodoService.delete(todo._id).then(function (response) {
      alert(response.data.message);
      var index = $scope.todos.indexOf(todo);
      $scope.todos.splice(index, 1);
    });
  };

  $scope.getPriorityStyle = function (priority) {
    switch (priority) {
      case "high":
        return "priority-high";
      case "medium":
        return "priority-medium";
      case "low":
        return "priority-low";
      default:
        return {};
    }
  };
});
