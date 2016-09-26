app.controller('profileController', ['$scope', '$location', 'userFactory', '$cookies',function($scope, $location, userFactory, $cookies) {
$scope.newUser = {};
$scope.wishes = {}


	if($cookies.getObject('newUser')){
		$scope.newUser = $cookies.getObject('newUser')
	}
	else{
		$location.url('/')
	}

	 $scope.getWish = function() {
        userFactory.getWish(function(data) {
            $scope.wishes = data
            console.log()
        })
    };
    $scope.getWish();


	// $scope.getOneWish = function() {
 //        userFactory.getOneWish(function(data) {
 //            $scope.wishes = data
 //            console.log()
 //        })
 //    };
 //    $scope.getOneWish();

    $scope.logout = function(){
        $cookies.remove('newUser')
        $location.url('/')

    }




}])