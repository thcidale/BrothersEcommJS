/**
 * Created by thiagocidaleassumpcao on 22/12/14.
 */
var myappControllers = angular.module('myappControllers',[]);

angular.module('myappControllers').filter('pagination', function()
{
    return function(input, start) {
        start = parseInt(start, 10);
        return input.slice(start);
    };
});

myappControllers.controller('RegisterCtrl',['$scope',function($scope) {


}]);

myappControllers.controller('HomeCtrl',['$scope',function($scope) {


}]);

myappControllers.controller('PaginationCtrl',['$scope',function($scope){

    $scope.prevPage = function() {
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
        }
    };
    $scope.pageCount = function() {
        return Math.ceil($scope.productrows.length/$scope.itemsPerPage)-1;
    };
    $scope.setPage = function(n) {
        $scope.currentPage = n;
    };
    $scope.nextPage = function() {
        if ($scope.currentPage < $scope.pageCount()) {
            $scope.currentPage++;
        }
    };
}]);


myappControllers.controller('ProductsDetailsCtrl', ['$scope', 'Products','$routeParams', function($scope, Products, $routeParams){
    Products.query(function(data){
        $scope.products = data[$routeParams.productId];
    });

    $scope.pizzas = ['Select a Pizza', 'small', 'medium','large', 'Xlarge'];

    $scope.buyPizza = function(){
       // faz alguma coisa
    }
}]);

myappControllers.controller('ProductsCtrl',['$scope','ProductFactory',function($scope,ProductFactory) {
    $scope.productrows =[];

    $scope.productrows=ProductFactory.getProductsInRows(3);


    $scope.range = function() {
        var rangeSize = 2;
        var ps = [];
        var start;

        start = $scope.currentPage;
        if ( start > $scope.pageCount()-rangeSize ) {
            start = $scope.pageCount()-rangeSize+1;
        }

        for (var i=start; i<start+rangeSize; i++) {
            ps.push(i);
        }
        return ps;
    };

    $scope.itemsPerPage = 3;
    $scope.currentPage = 0;


}]);

