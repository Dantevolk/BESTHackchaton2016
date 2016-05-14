var Firebase  = require('firebase');
var Constants = require('../common/constants.js');

textController.$inject = [
    '$scope',
    '$firebaseArray'
];

function textController ( $scope, $firebaseArray ) {
    $scope.textItems = $firebaseArray( new Firebase( Constants.MY_ROOT_URL + Constants.TEXT_ITEMS) );

    $scope.addTextItem = function() {
        var textItem = {};

        textItem.text  = $scope.newTextItemText  || '';
        textItem.title = $scope.newTextItemTitle || '';
        textItem.date  = new Date().getTime();

        $scope.textItems.$add(textItem);

        $scope.newMessageText   = '';
        $scope.newTextItemTitle = '';
    };
}

module.exports = textController;
