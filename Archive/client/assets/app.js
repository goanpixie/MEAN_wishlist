var app = angular.module('MEAN_WishList', ['ngRoute','ngCookies'])
app.config(function($routeProvider){
    $routeProvider

        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeController'
        })

        .when('/wall', {
        	templateUrl: 'partials/wall.html',
            controller: 'wallController'
        })

        .when('/profile/:id', {
        	templateUrl: 'partials/profile.html',
            controller: 'profileController'
        })



        .otherwise({
        redirectTo:'/home'

        })

})