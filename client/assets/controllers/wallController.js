app.controller('wallController', ['$scope', '$location', 'userFactory', '$cookies', function($scope, $location, userFactory, $cookies) {
    $scope.newUser = {};
    $scope.wishes = [];
    $scope.selected = [];
    $scope.errors = false;
    $scope.messages = [];
    $scope.createWish = {};
    $scope.wish = []


    if ($cookies.getObject('newUser')) {
        $scope.newUser = $cookies.getObject('newUser')
    } else {
        $location.url('/')
    }


    $scope.getUser = function() {
        userFactory.getUser(function(data) {
            $scope.users = data
        })
    };
    $scope.getUser();


    $scope.addWish = function() {
        $scope.createWish.userid = $scope.newUser._id;
        $scope.createWish.name = $scope.newUser.name;
        userFactory.addWish($scope.createWish, function(data) {
            console.log(data)
            $scope.messages = [];
            if (data.errors) {
                $scope.errors = true;
                for (err in data.errors) {
                    console.log(data.errors[err].message)
                    $scope.messages.push(data.errors[err].message)
                }
            }

        })
        $scope.getWish();
    }


    $scope.getWish = function() {
        userFactory.getWish(function(data) {
            $scope.wishes = data
        })
    };
    $scope.getWish();


    $scope.toggle = function(item) {
        var idx = $scope.selected.indexOf(item);
            if (idx > -1) {
            $scope.selected.splice(idx, 1);
        } else {
            $scope.selected.push(item);
        }
    }
    $scope.getWish();


    $scope.logout = function() {
        $cookies.remove('newUser')
        $location.url('/')

    }


}])
