var angular     = require('angular');
var Firebase    = require('firebase');
var angularFire = require('angularfire');
var ngRoute     = require('angular-route');


//Controllers
var App         = require('./components/app/app');
var About       = require('./components/about/about');
var Main        = require('./components/main/main');
var Contact     = require('./components/contact/contact');
var fileReader  = require('./directives/fileReader.js');
//Services
var logIn       = require('./components/services/logIn.service');

angular.module('app', ['ngRoute', 'firebase']);

angular.module('app')
  .constant('config', {templates: './js/components/'})
  .service('logIn', logIn)
  .controller('App', ['$scope', 'logIn', function($scope, logIn) {
    
    var user = new Firebase('https://hackathon-try-catch.firebaseio.com/');
    
    $scope.activeTab    = sessionStorage.getItem('tab') || 'main';
    $scope.auth         = logIn;
    $scope.auth.$onAuth(function(dataStatus) {
      
      $scope.logInStatus = dataStatus;
    })
    
    $scope.setActiveTab = setActiveTab;
    $scope.logUserIn    = logUserIn;
    
    function setActiveTab(tab) {
      
      $scope.activeTab = tab;
      sessionStorage.setItem('tab', tab);
    }
    
    function logUserIn() {
      
      user.authWithPassword({
        
        email: $scope.user.email,
        password: $scope.user.password
      }, function(err, data) {
        
        if (err) {
          
          console.debug('Error', err);
        } else {
          
          document.getElementById('closeLoginModalBtn').click();
          console.debug('User was logged in', data);
        }
      }, {
        
        remember: 'sessionOnly'
      })
    }
  }])
  .controller('About', About)
  .controller('Contact', Contact)
  .controller('Main', Main)
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

}])
    .directive("fileread", fileReader);

