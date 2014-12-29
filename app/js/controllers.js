/**
 * Created by thiagocidaleassumpcao on 22/12/14.
 */
var myappControllers = angular.module('myappControllers',[]);

myappControllers.controller('RegisterCtrl',['$scope','Countries',function($scope, Countries) {
    $scope.hello = 'Hello World';

    Countries.get(function(data){
        $scope.countries = data.countries;
    })
}]);

myappControllers.controller('HomeCtrl',['$scope',function($scope) {


}]);
myappControllers.controller('ProductsCtrl',['$scope',function($scope) {
$scope.productrows =[];
    productrow = [];
    product={};
    product2={};
    product.title="Produto Titulo Teste";
    product.subtitle="Produto SubTitulo Teste";
    product.price = "12,43";
    product.numberOfReviews ="3";
    productrow.push(product);
    product2.title="Produto Titulo Teste 2";
    product2.subtitle="Produto SubTitulo Teste 2";
    product2.price = "23,43";
    product2.numberOfReviews ="23";
    productrow.push(product2);
    $scope.productrows.push(productrow);
    productrow2 = [];
    product3={};
    product3.title="Produto Titulo Teste";
    product3.subtitle="Produto SubTitulo Teste";
    product3.price = "12,43";
    product3.numberOfReviews ="3";
    productrow2.push(product3);
    $scope.productrows.push(productrow2);

}]);