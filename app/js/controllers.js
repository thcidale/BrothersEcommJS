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


    $scope.range = function() {
        var rangeSize = 2;
        var ps = [];
        var start;
        var pageCount = $scope.pageCount();
        start = $scope.currentPage;
        if(rangeSize<=pageCount) {
            if (start > pageCount - rangeSize) {
                start = pageCount - rangeSize;
            }

            for (var i = start; i < start + rangeSize; i++) {
                ps.push(i);
            }
        }else{
            for (var i = start; i <pageCount; i++) {
                ps.push(i);
            }

        }
        return ps;
    };

    $scope.prevPage = function() {
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
        }
    };
    $scope.pageCount = function() {
        return Math.ceil($scope.productrows.length/$scope.itemsPerPage);
    };
    $scope.setPage = function(n) {
        $scope.currentPage = n;
    };
    $scope.nextPage = function() {
        if (($scope.currentPage +1)< $scope.pageCount()) {
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
    $scope.itemsPerPage = 3;
    $scope.currentPage = 0;

    $scope.productrows=ProductFactory.getProductsInRows(3);







}]);

