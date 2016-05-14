var _               = require('lodash');
var angular         = require('angular');
var Firebase        = require('firebase');
var angularFire     = require('angularfire');

var textController  = require('./controllers/textController.js');
var imageController = require('./controllers/imageController.js');
var fileReader      = require('./directives/fileReader.js');

var app = angular.module('app', ['firebase'])
    .controller('textController',  textController)
    .controller('imageController', imageController)
    .directive("fileread", fileReader);