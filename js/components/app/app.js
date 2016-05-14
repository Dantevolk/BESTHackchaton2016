App.$inject = [
  '$scope',
  'logIn'
];

function App($scope, logIn) {

  var user = new Firebase('https://hackathon-try-catch.firebaseio.com/');

  $scope.activeTab    = sessionStorage.getItem('tab') || 'main';
  $scope.auth         = logIn;
  $scope.auth.$onAuth(function(dataStatus) {

    $scope.logInStatus = dataStatus;
  });

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
}

module.exports = App;