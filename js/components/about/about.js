About.$inject = [
  '$scope',
  'logIn',
  '$firebaseObject',
  '$firebaseArray'
];
function About($scope, logIn, $firebaseObject, $firebaseArray) {
  
  $scope.auth         = logIn;
  $scope.auth.$onAuth(function(dataStatus) {
    
    $scope.logInStatus = dataStatus;
  })
  
  var ref  = new Firebase('https://hackathon-try-catch.firebaseio.com');
  var user = new Firebase('https://hackathon-try-catch.firebaseio.com/profile-img');
  var profile_sections = new Firebase('https://hackathon-try-catch.firebaseio.com/profile-sections');
  $scope.user_profile_avatar = $firebaseObject(user);
  $scope.profile_sections = $firebaseArray(profile_sections) || [];
    
     
  $scope.uploadme = [];
  $scope.uploadme.showLoader = false;
  $scope.changeAvatar = changeAvatar;
  $scope.saveAvatar   = saveAvatar;
  $scope.addSection   = addSection;
  $scope.saveSections = saveSections;
  
  function changeAvatar() {
    
    document.getElementById('avatar').click();
  }
  
  function saveAvatar() {
    var imageData = $scope.uploadme;
    
    $scope.uploadme = [];
    
    console.debug(imageData);
    if ( !imageData.length ) return console.warn('Warn: image array empty');

      _.map(imageData, function (image) {
        image.date  = new Date().getTime();  
        
        user.set({
          image: image
        })
      });
  }
  
  function addSection() {
    
    $scope.profile_sections.$add({
      
      header: '',
      text: ''
    })
  }
  
  function saveSections() {
    
    ref.set({
      'profile-sections': $scope.profile_sections
    });
  }
}

module.exports = About; 
