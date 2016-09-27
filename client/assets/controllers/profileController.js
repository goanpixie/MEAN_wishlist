app.controller('profileController', ['$scope', '$location', 'userFactory', '$cookies','$routeParams',function($scope, $location, userFactory, $cookies, $routeParams) {
$scope.newUser = {};
$scope.wishes = {};
$scope.selected = [];


	if($cookies.getObject('newUser')){
		$scope.newUser = $cookies.getObject('newUser')
	}
	else{
		$location.url('/')
	}

	 // $scope.getWish = function() {
  //       userFactory.getWish(function(data) {
  //           $scope.wishes = data
  //       })
  //   };
  //   $scope.getWish();

    // $scope.toggle = function(item) {
    //     var idx = $scope.selected.indexOf(item);
    //         if (idx > -1) {
    //             $scope.selected.splice(idx, 1);
    //         } else {
    //             $scope.selected.push(item);
    //         }
    //     }
    // $scope.getWish();


	$scope.getWishByUser = function() {
        userFactory.getWishByUser($routeParams.id,function(data) {
            $scope.wishes = data
            console.log()
        })
    };
    $scope.getWishByUser();

    $scope.logout = function(){
        $cookies.remove('newUser')
        $location.url('/')

    }




}])