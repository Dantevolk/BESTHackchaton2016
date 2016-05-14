var _     = require('lodash');
var logIn = require('../services/logIn.service');

Main.$inject = [
  '$scope',
  'logIn',
  'imageController'
];
function Main($scope, logIn, imageController) {
  $scope.auth = logIn;
  $scope.auth.$onAuth(function(authData) {
    
    $scope.logInStatus = authData;
  });

  $scope.works = imageController.imageItems;
  
  $scope.hidePreview  = hidePreview;
  $scope.showPreview  = showPreview;
  $scope.prevWork     = prevWork;
  $scope.nextWork     = nextWork;
  $scope.editWork     = editWork;
  $scope.removeWork   = removeWork;
  $scope.remove       = remove;
  $scope.onAddImageBtnClick = onAddImageBtnClick;
  $scope.saveChanges        = saveChanges;
  
  function hidePreview() {
    
    $scope.previewVisible = false;
  }

  function onAddImageBtnClick() {
    $scope.editingWork = {};
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
    
    var currentWorkIndex = _.findIndex($scope.works, {title: current.title});
    if (currentWorkIndex === 0) {
      
      $scope.selectedWork = $scope.works[$scope.works.length-1];
    } else {
      --currentWorkIndex;
      $scope.selectedWork = $scope.works[currentWorkIndex];
    }
  }
  
  function nextWork(current) {
    
    var currentWorkIndex = _.findIndex($scope.works, {title: current.title});
    if (currentWorkIndex === ($scope.works.length - 1)) {
      
      $scope.selectedWork = $scope.works[0];
    } else {
      ++currentWorkIndex;
      $scope.selectedWork = $scope.works[currentWorkIndex];
    }
  }
  
  function editWork(work) {
    
    $scope.editingWork = work;
  }

  function saveChanges() {
    console.log('save changes');
  }
  
  function removeWork(work) {
    
    $scope.removingWork = work;
  }

  function remove() {
    imageController.imageItems.$remove($scope.removingWork);
  }
}

module.exports = Main;