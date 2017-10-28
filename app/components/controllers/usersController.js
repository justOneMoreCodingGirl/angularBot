// AboutController.js
// For distribution, all controllers
// are concatanated into single app.js file
// by using Gulp

'use strict';

angular.module('mostPopularListingsApp.users', ['ngRoute'])

// Routing configuration for this module
// .config(['$routeProvider',function($routeprovider){
// 	$routeprovider.when('/users', {
// 		controller: 'usersController',
// 		templateUrl: 'components/views/users.html'
// 	});
// }])

// Controller definition for this module
.controller('usersController', ['$scope','$http',
    function($scope, $http) {

	// Just a housekeeping.
	// In the init method we are declaring all the
	// neccesarry settings and assignments to be run once
	// controller is invoked
	init();

	function init(){

    };

	$scope.allUsers;

	$scope.getData = function () {
        $http({
            method : "GET",
            url : "http://localhost:3979/api/users"
        }).then(function mySuccess(response) {
            console.log('response', response);
            $scope.allUsers = response.data;
        }, function myError(response) {
            console.log('error', response);
            $scope.allUsers = response.statusText;
        });
    }

    $scope.getData();

}]);