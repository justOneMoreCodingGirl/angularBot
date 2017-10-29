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
.controller('userDetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

	// Just a housekeeping.
	// In the init method we are declaring all the
	// neccesarry settings and assignments to be run once
	// controller is invoked
	init();

	function init(){
	
	};
    $scope.userDetails;
    $scope.showAwards = false;
    $scope.showEducation = false;
    $scope.showExperience = false;
    $scope.showSkills = false;

    $scope.IdUser = $routeParams.userID;

    $scope.rating = {
        userID : 1,
        rating: 0
    }
    $scope.getData = function () {
        $http({
            method : "GET",
            url : "http://localhost:3979/api/users/"+ $scope.IdUser
        }).then(function mySuccess(response) {
            console.log('response', response);
            $scope.userDetails = response.data;
            $scope.getRating();
        }, function myError(response) {
            console.log('error', response);
            $scope.userDetails = response.statusText;
        });

    }

    $scope.getRating = function () {
        if($scope.userDetails.awardsAndCertifications !== undefined){
            if($scope.userDetails.awardsAndCertifications.length !== 0){
                var count = parseInt($scope.userDetails.awardsAndCertifications.length);
                $scope.rating.rating = $scope.rating.rating + count*3;
                $scope.showAwards = true;
            }
        }

        if($scope.userDetails.educations !== undefined){
            var count = $scope.userDetails.educations.length;
            if($scope.userDetails.educations.length !== 0){
                $scope.showEducation = true;
                $scope.rating.rating = $scope.rating.rating + count*10;
            }
        }

        if($scope.userDetails.experience !== undefined){
            var count = $scope.userDetails.experience.length;
            if($scope.userDetails.experience.length !== 0){
                $scope.rating.rating = $scope.rating.rating + count*8;
                $scope.showExperience = true;
            }
        }

        if($scope.userDetails.skills !== undefined){
            var count = $scope.userDetails.skills.length;
            if($scope.userDetails.skills.length !== 0){
                $scope.rating.rating = $scope.rating.rating + count*2;
                $scope.showSkills = true;
            }
        }

        console.log('rating', $scope.rating.rating);
    }

    $scope.getData();


}]);