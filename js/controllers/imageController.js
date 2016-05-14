var Firebase  = require('firebase');
var Constants = require('../common/constants.js');

imageController.$inject = [
    '$firebaseArray'
];

function imageController ( $firebaseArray ) {
    var imageItems = $firebaseArray( new Firebase( Constants.MY_ROOT_URL + Constants.IMAGE_ITEMS ));

    var uploadme = [];
    uploadme.showLoader = false;

    var onSelectImgClick = function () {
        document.getElementById('fileInput').click();
    };

    var addImage = function() {
        var imageData = uploadme;

        uploadme = [];

        if ( !imageData.length ) return console.warn('Warn: image array empty');

        _.map(imageData, function (image) {
            image.date  = new Date().getTime();
            image.title = newImageTitle || '';
            image.desc  = newImageDesc  || '';

            imageItems.$add(image);

            newImageDesc  = '';
            newImageTitle = '';
        });
    };

    return {
        imageItems: imageItems,
        uploadme: uploadme,
        onSelectImgClick: onSelectImgClick,
        addImage: addImage
    }
}

module.exports = imageController;
