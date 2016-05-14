var Firebase  = require('firebase');
var Constants = require('../common/constants.js');

imageController.$inject = [
    '$scope',
    '$firebaseArray'
];

function imageController ( $scope, $firebaseArray ) {
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

module.exports = imageController;
