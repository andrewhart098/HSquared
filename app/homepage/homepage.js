'use strict';

angular.module('myApp.homepage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/homepage', {
    templateUrl: 'homepage/homepage.html',
    controller: 'HomePageCtrl'
  });
}])

.controller('HomePageCtrl', ['$scope' function($scope) {
	$scope.blogs = 
[
{
"title":"hello1",
"author":"me",
"date":"11-17-2015"
},
{
"title":"hello2",
"author":"me",
"date":"11-17-2015"
},
{
"title":"hello3",
"author":"me",
"date":"11-17-2015"
}
];

}]);