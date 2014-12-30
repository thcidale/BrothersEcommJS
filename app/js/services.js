/**
 * Created by thiagocidaleassumpcao on 29/12/14.
 */
var appServices = angular.module('myappServices',['ngResource']);

appServices.factory('ProductFactory',['$resource',function($resource){
    var service = {};


    var productResource=$resource('data/:productId.json', {},{
            query: {method:'GET',params:{productId:'products'},isArray:true}

        });

    service.getProductsInRows =function(numberOfColumns){
        var rowOfProducts = [];
        var products=[];
        products = productResource.query(function(){
            var row = [];
            products.forEach(function(product){
                row.push(product);
                if(row.length===numberOfColumns){
                    rowOfProducts.push(row);
                    row=[];
                }

            }

            )
            if(row.length<3) {
                rowOfProducts.push(row);
                row = [];
            }
        });
    return rowOfProducts;
    };

    service.getNumberOfProducts = function(productsInRows){
        var count = 0;
        productsInRows.forEach(function(row){
            row.forEach(function(product){
                count++;
            })

        })
    return count;
    }
    return service;
}]);