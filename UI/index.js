var app = angular.module("app", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "templates/home.html",
    controller: "TodoController",
    // css: 'templates/home.styles.css'
  });
});

app.config(function ($httpProvider) {
  $httpProvider.interceptors.push(function ($q) {
    return {
      responseError: function (rejection) {
        // Handle error globally
        alert(rejection.data.message);
        console.log("HTTP error:", rejection.data.message);
        return $q.reject(rejection);
      },
    };
  });
});
