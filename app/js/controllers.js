/**
 * Created by thiagocidaleassumpcao on 22/12/14.
 */
var myappControllers = angular.module('myappControllers',[]);

myappControllers.controller('RegisterCtrl',['$scope',function($scope) {


}]);

myappControllers.controller('HomeCtrl',['$scope',function($scope) {


}]);
myappControllers.controller('ProductCtrl',['$scope','ProductFactory',function($scope, ProductFactory) {
    $scope.productrows =[];
    $scope.productrows = ProductFactory.getProductsInRows(3);

}]);