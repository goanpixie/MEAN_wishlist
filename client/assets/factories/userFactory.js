app.factory('userFactory', ['$http', function($http) {
    function userFactory() {

		this.createUser= function(newUser, callback){
			console.log("I am in Factory")
		            $http.post('/createUser', newUser).then(function(returned_data){
		                callback(returned_data.data)
		            })
		        }

		this.getUser = function(callback) {
            $http.get('/get_user').then(function(r_data) {
                console.log(r_data)
                callback(r_data.data)
            })

        }

        this.addWish = function(wish, callback) {
            console.log("I am in addWish method-->factory" + wish)
            $http.post('/add_wish', wish).then(function(r_data) {
                callback(r_data.data)
            })
        }


        this.getWish = function(callback) {
            $http.get('/get_wish').then(function(r_data) {
                console.log(r_data)
                callback(r_data.data)
            })

        }

        this.getWishByUser = function(_id, callback){
			console.log("I am in getWishByUser method" +_id)
			$http.get('/getWishByUser/'+_id).then(function(r_data){
			     callback(r_data.data)
			})
		}

}

    return new userFactory();
}])