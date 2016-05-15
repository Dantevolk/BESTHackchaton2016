var _ = require('lodash');
var logIn = require('../services/logIn.service');
var Firebase  = require('firebase');
var Constants = require('../../common/constants.js');

Main.$inject = [
  '$scope',
  'logIn',
  '$firebaseArray'
];
function Main($scope, logIn, $firebaseArray) {
 
  
  $scope.auth = logIn;
  $scope.auth.$onAuth(function(authData) {
    
    $scope.logInStatus = authData;
  })
  
 
  $scope.works = [
    
    {
      title: 'First animal',
      src: 'images/animals.jpg',
      description: 'First picture description!'
    },
    
    {
      title: 'Cats!!!',
      src: 'images/cat2.jpg',
      description: 'This is description for second picture!'
    },
    {
      title: 'Cat in glasses',
      src: 'images/cat3.jpg',
      description: 'This is description for third picture!'
    },
    {
      title: 'Just another cat',
      src: 'images/cats.jpg',
      description: 'This is nice description for cat in glasses!'
    }
  ]
  
  $scope.hidePreview  = hidePreview;
  $scope.showPreview  = showPreview;
  $scope.prevWork     = prevWork;
  $scope.nextWork     = nextWork;
  $scope.editWork     = editWork;
  $scope.removeWork   = removeWork;
  $scope.remove       = remove;
  $scope.saveChanges  = saveChanges;
  $scope.clearData    = clearData;
  
  function hidePreview() {
    
    $scope.previewVisible = false;
  }
  
  function showPreview(e, work) {
    
    if (e.target.className === 'works__work__image') {
    
      $scope.selectedWork = work;
      $scope.previewVisible = true;   
    } else {
      
      return;
    }
    
  }
  
  function prevWork(current) {
    
    var currentWorkIndex = _.findIndex($scope.imageItems, {title: current.title});
    if (currentWorkIndex === 0) {
      
      $scope.selectedWork = $scope.imageItems[$scope.imageItems.length-1];
    } else {
      --currentWorkIndex;
      $scope.selectedWork = $scope.imageItems[currentWorkIndex];
    }
  }
  
  function nextWork(current) {
    
    var currentWorkIndex = _.findIndex($scope.imageItems, {title: current.title});
    if (currentWorkIndex === ($scope.imageItems.length - 1)) {
      
      $scope.selectedWork = $scope.imageItems[0];
    } else {
      ++currentWorkIndex;
      $scope.selectedWork = $scope.imageItems[currentWorkIndex];
    }
  }
  
  function editWork(work) {
    
    $scope.editingWork = work;
  }
  
  function removeWork(work) {
    
    $scope.removingWork = work;
  }
  
  function saveChanges() {
    
    console.debug('Will Save changes');
  }
  
  function remove() {
    
    console.debug('Will remove work');
  }

  function clearData() {
    $scope.uploadme = [];
    $scope.uploadme.showLoader = false;
    $scope.newImageDesc  = '';
    $scope.newImageTitle = '';
  }

  $scope.imageItems = $firebaseArray( new Firebase( Constants.MY_ROOT_URL + Constants.IMAGE_ITEMS ));

  $scope.uploadme = [];
  $scope.uploadme.showLoader = false;

  $scope.onSelectImgClick = function () {
    document.getElementById('fileInput').click();
  };

  $scope.addImage = function() {
    var imageData = $scope.uploadme;

    $scope.uploadme = [];

    if ( !imageData.length ) return console.warn('Warn: image array empty');

    _.map(imageData, function (image) {
      image.date  = new Date().getTime();
      image.title = $scope.newImageTitle || '';
      image.desc  = $scope.newImageDesc  || '';

      $scope.imageItems.$add(image);

      $scope.newImageDesc  = '';
      $scope.newImageTitle = '';
    });
  };
}

module.exports = Main;