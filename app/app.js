// Declare app level module which depends on views, and components
myapp= angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'myappControllers',
    'myappServices'
]);
myapp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/register', {
        templateUrl: 'partials/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/products', {
        templateUrl: 'partials/products.html',
        controller: 'ProductsCtrl'
      })
      .when('/products/:productId', {
        templateUrl: 'partials/products_details.html',
        controller: 'ProductsDetailsCtrl'
      })
      .when('/home', {
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