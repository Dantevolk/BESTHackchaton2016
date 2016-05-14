App.$inject = [
 '$scope'
];

function App($scope) {
  
  $scope.activeTab = 'main';
  $scope.setActiveTab = setActiveTab;
   
  function setActiveTab(tab) {
    
    $scope.activeTab = tab;
  }
}

module.exports = App;