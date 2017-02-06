// The first letter must be lower case -> mediaItem, like Camel Case notation
angular.module("myMoviesSeriesApp").directive("mediaItem", ["ApiService", function(ApiService){

    // The directives ever return JSON file
    return {
        restrict: "AE",
        replace: true,
        templateUrl: "views/mediaItem.html",
        scope: {
            data: "=",
            whenSelect: "&"// This character is a function for Angular -> &
        },
        link: function(scope){

            scope.pathImage = function(path){

                return ApiService.getPathImage(45, path)
            };

            scope.clickOnMedia = function(id){

                // It must return JSON file
                scope.whenSelect({ mediaId: id });
            };
        }
    };
}]);