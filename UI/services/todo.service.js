angular.module('app')
  .factory('TodoService', function ($http) {
    var baseUrl = 'http://localhost:3000/task'; // Adjust API endpoint as per your backend

    return {
      getAll: function () {
        return $http.get(baseUrl);
      },
      create: function (todo) {
        return $http.post(baseUrl, todo);
      },
      update: function (id, todo) {
        return $http.patch(baseUrl + '/' + id, todo);
      },
      delete: function (id) {
        return $http.delete(baseUrl + '/' + id);
      }
    };
  });
