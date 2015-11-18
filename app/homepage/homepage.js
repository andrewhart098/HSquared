'use strict';

angular.module('myApp.homepage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/homepage', {
    templateUrl: 'homepage/homepage.html',
    controller: 'HomePageCtrl'
  });
}])

.controller('HomePageCtrl', ['$scope', function($scope) {

	$scope.newBlog = {};

	$scope.blogs = 
		[
			{"title":"hello1", "author":"me", "date":new Date()}, 
			{"title":"hello2", "author":"me", "date":new Date()}, 
			{"title":"hello3", "author":"me", "date":new Date()} 
		];

	$scope.addBlog = function() {
		var newBlog = {
			title: $scope.newBlog.title,
			author: $scope.newBlog.author,
			date: new Date()
		};

		$scope.blogs.push(newBlog);

		$scope.newBlog = {};
	};


	$scope.removeBlog = function(blog) {
		$scope.blogs.splice($scope.blogs.indexOf(blog), 1);
	};
}]);