// Declare app level module which depends on views, and components
myapp= angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myappControllers'
]);
myapp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/register', {
    templateUrl: 'partials/register.html',
    controller: 'RegisterCtrl'
  }).
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      otherwise({redirectTo: '/home'});
}]);

myapp.directive('myHeader', function() {
  return {
    restrict: 'E',
    templateUrl: "directives/header.html"
  }
});
myapp.directive('myFooter', function() {
  return {
    restrict: 'E',
    templateUrl: "directives/footer.html"
  }
});