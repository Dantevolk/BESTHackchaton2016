var angular     = require('angular');
var Firebase    = require('firebase');
var angularFire = require('angularfire');
var ngRoute     = require('angular-route');

//Controllers
var App         = require('./components/app/app');
var About       = require('./components/about/about');
var Main        = require('./components/main/main');
var Contact     = require('./components/contact/contact');
var ImageController = require('./controllers/imageController.js');

var editImageModal = require('./directives/editImageModal.js');

//Services
var logIn       = require('./components/services/logIn.service');

angular.module('app', ['ngRoute', 'firebase'])
    .constant  ('config', {templates: './js/components/'})
    .service   ('logIn',   logIn)
    .service('imageController', ImageController)
    .controller('App',     App)
    .controller('About',   About)
    .controller('Contact', Contact)
    .controller('Main',    Main)
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
    .directive('editImageModal', editImageModal)
;

