app.controller('mvNavBarLoginCtrl', function($scope, $http, mvNotifier, mvIdentity, mvAuth){
    $scope.identity = mvIdentity;
    $scope.signin = function(username, password){
        mvAuth.authenticateUser(username, password).then(function(success){
            if(success){
                mvNotifier.notify('You have successfully logged in', 'success');
            }else{
                mvNotifier.notify('Username/ Password is incorrect', 'failure');
            }
        });
    }
});