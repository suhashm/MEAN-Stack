/**
 * Created by shm2 on 3/5/14.
 */

var app = angular.module('app',[ 'ngResource', 'ngRoute']);

app.config(function($routeProvider, $locationProvider){

    var routeRoleChecks = {
        admin: {
            auth: function(mvAuth){
                return mvAuth.authorizeCurrentUserForRoute('admin');
            }
        },
        user: {
            auth: function(mvAuth){
                return mvAuth.authorizeAuthenticatedUserForRoute();
            }
        }
    }
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', { templateUrl:'/partials/main/main', controller: 'mvMainCtrl'})
    $routeProvider.when('/admin/users', { templateUrl:'/partials/admin/user-list',
        controller: 'mvUserListCtrl',
        resolve: routeRoleChecks.admin
    });
    $routeProvider.when('/signup', { templateUrl:'/partials/account/signup', controller: 'mvSignupCtrl'})
    $routeProvider.when('/profile', { templateUrl:'/partials/account/profile',
        controller: 'mvProfileCtrl', resolve: routeRoleChecks.user
    })
});


app.run(function($rootScope, $location){
    $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection){
        if(rejection === 'not authorized'){
            $location.path('/');
        }
    })
})


