var angular = require('angular');
angular.module('app', [])
       .controller('App', ['$scope', function($scope) {
         
         $scope.name = 'User';
       }])