var _          = require('lodash');

var editImageModal = [ function() {
    return {
        restrict: 'E',
        templateUrl: './editImageModal.html',
        scope: {
            imageData: '='
        },
        controller: [ '#scope', 'imageController', function ($scope, imageController) {
            $scope.saveChanges = function () {
                console.log('save changes');
            }
        }]
    }
}];

module.exports = editImageModal;
