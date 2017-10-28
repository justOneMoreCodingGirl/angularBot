// HomeController.js
// For distribution, all controllers
// are concatanated into single app.js file
// by using Gulp

'use strict';

angular.module('mostPopularListingsApp.userDetails', ['ngRoute'])

// Routing configuration for this module
// .config(['$routeProvider',function($routeprovider){
// 	$routeprovider.when('/', {
// 		controller: 'HomeController',
// 		templateUrl: 'components/views/userDetails.html'
// 	});
// }])

// Controller definition for this module
.controller('userDetailsController', ['$scope', '$http', function($scope, $http) {

	// Just a housekeeping.
	// In the init method we are declaring all the
	// neccesarry settings and assignments to be run once
	// controller is invoked
	init();

	function init(){
	
	};
    $scope.userDetails;

    $scope.getData = function () {
        $http({
            method : "GET",
            url : "http://localhost:3979/api/users/1"
        }).then(function mySuccess(response) {
            console.log('response', response);
            $scope.userDetails = response.data;
        }, function myError(response) {
            console.log('error', response);
            $scope.userDetails = response.statusText;
        });


    }

    $scope.getData();


}]);