'use strict';

angular.module('myApp.demos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/demos', {
    templateUrl: 'pages/demos/demos.html',
    controller: 'demosCtrl'
  });
}])

.controller('demosCtrl', [function() {

}]);