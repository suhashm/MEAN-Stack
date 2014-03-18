

app.controller('mvSignupCtrl', function($scope, mvUser, mvAuth, mvNotifier, $location){

    $scope.signup = function(){
        var newUserData = {
            username: $scope.email,
            password: $scope.password,
            firstName: $scope.fname,
            lastName: $scope.lname
        };

        mvAuth.createUser(newUserData).then(function(){
            mvNotifier.notify('User Accont Created!','success');
            $location.path('/');
        }, function(reason){
            mvNotifier.notify(reason,'failure');
        })
    }
});