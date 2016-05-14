logIn.$inject = [
  '$firebaseAuth'
]
function logIn($firebaseAuth) {
  
  var user = new Firebase('https://hackathon-try-catch.firebaseio.com/');
  return $firebaseAuth(user);
}

module.exports = logIn;