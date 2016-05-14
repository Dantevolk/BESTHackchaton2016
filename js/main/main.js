var _ = require('lodash');

Main.$inject = [
  '$scope'
]
function Main($scope) {
  
  $scope.title = 12;
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
  
  function removeWork(work) {
    
    $scope.removingWork = work;
  }
  
  function saveChanges() {
    
    console.debug('Will Save changes');
  }
  
  function remove() {
    
    console.debug('Will remove work');
  }
}

module.exports = Main;