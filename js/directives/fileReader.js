var _          = require('lodash');

var fileReader = [ function() {
    return {
        scope: {
            fileread: "=",
            loader: '=loader'
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                scope.$apply(function () {
                    scope.loader = true;
                });

                _.map(changeEvent.target.files, function (file) {
                    var reader = new FileReader();

                    reader.readAsDataURL(file);

                    reader.onload = function (loadEvent) {
                        var img = new Image();

                        img.src = loadEvent.target.result;

                        img.onload = function (e) {
                            var imgData = {
                                src     : loadEvent.target.result,
                                fileInfo: {
                                    width : e.target.width,
                                    height: e.target.height
                                }
                            };

                            scope.$apply(function () {
                                scope.loader = false;
                                scope.fileread.push(imgData);
                            });
                        };
                    };
                })
            });
        }
    }
}];

module.exports = fileReader;