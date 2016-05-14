var angular     = require('angular');
var Firebase    = require('firebase');
var angularFire = require('angularfire');
var ngRoute     = require('angular-route');

var App         = require('./app/app');
var About       = require('./about/about');
var Main        = require('./main/main');
var Contact     = require('./contact/contact');


angular.module('app', ['ngRoute', 'firebase']);

angular.module('app')
  .constant('config', {templates: './js/'})
  .controller('App', ['$scope', function($scope) {
    
    $scope.activeTab = sessionStorage.getItem('tab') || 'main';
    $scope.setActiveTab = setActiveTab;
    
    function setActiveTab(tab) {
      
      $scope.activeTab = tab;
      sessionStorage.setItem('tab', tab);
    }
  }])
  .controller('About', About)
  .controller('Contact', Contact)
  .controller('Main', Main);

angular.module('app')
.config(['$routeProvider', 'config', function($routeProvider, config) {
  
  $routeProvider
    .when('/main', {
      
      templateUrl: config.templates + 'main/main.html',
      controller: 'Main'
    })
    .when('/about', {
      
      templateUrl: config.templates + 'about/about.html',
      controller: 'About'
    })
    .when('/contact', {
      
      templateUrl: config.templates + 'contact/contact.html',
      controller: 'Contact'
    })
    .otherwise({
      
      redirectTo: '/main'
    })

}]);

// angular.module('app')
//   .service('auth', ['$firebaseAuth', function($firebaseAuth) {
    
//     var auth = new Firebase('https://hackathon-try-catch.firebaseio.com');
//     return $firebaseAuth(auth);
//   }])

