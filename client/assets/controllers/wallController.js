app.controller('wallController', ['$scope', '$location', 'userFactory', '$cookies',function($scope, $location, userFactory, $cookies) {
$scope.newUser = {};
$scope.wishes = {}
$scope.errors = false;
$scope.messages = [];
$scope.createWish = {};
$scope.wish=[]


	if($cookies.getObject('newUser')){
		$scope.newUser = $cookies.getObject('newUser')
	}
	else{
		$location.url('/')
	}



	$scope.getUser = function() {
		userFactory.getUser(function(data) {
	    	$scope.users = data
		})
	};
	$scope.getUser();


	$scope.addWish = function() {
        $scope.createWish._id = $scope.newUser._id
        userFactory.addWish($scope.createWish, function(data) {
        	console.log(data)
            $scope.messages = []
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
            console.log()
        })
    };
    $scope.getWish();


    $scope.logout = function(){
        $cookies.remove('newUser')
        $location.url('/')

    }


	}])

	



