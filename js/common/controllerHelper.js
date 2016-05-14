var ControllerHelper = ( function() {
    var _imageItemIndex = 0;
    var _textItemIndex  = 0;

    var getNewTextItemIndex = function () {
        return ++_textItemIndex;
    };

    var getNewImageItemIndex = function () {
        return ++_imageItemIndex;
    };

    var setImageItemIndex = function (index) {
        _imageItemIndex = index;
    };

    var setTextItemIndex = function (index) {
        _textItemIndex = index;
    };

    return {
        setTextItemIndex    : setTextItemIndex,
        setImageItemIndex   : setImageItemIndex,
        getNewTextItemIndex : getNewTextItemIndex,
        getNewImageItemIndex: getNewImageItemIndex
    }
}() );

module.exports = ControllerHelper;