app.controller('mvProfileCtrl', function($scope, mvIdentity, mvAuth, mvNotifier){
    $scope.email = mvIdentity.currentUser.username;
    $scope.fname = mvIdentity.currentUser.firstName;
    $scope.lname = mvIdentity.currentUser.lastName;

    $scope.update = function(){
        var newUserData = {
            username: $scope.email,
            fistName: $scope.fname,
            lastName: $scope.lname
        }
        if($scope.password && $scope.password.length > 0){
            newUserData.password  = $scope.password;
        }

        mvAuth.updateCurrentUser(newUserData).then(function(){
            mvNotifier.notify('Your User account has been updated', 'success')
        }, function(reason){
            mvNotifier.notify(reason, 'failure')
        })

    }
});