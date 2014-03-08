/**
 * Created by shm2 on 3/5/14.
 */

var app = angular.module('app',[ 'ngResource', 'ngRoute']);

app.config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', { templateUrl:'/partials/main', controller: 'mainCtrl'})
})

app.controller('mainCtrl',function($scope){
    $scope.myVar = "This is Angular";
})
