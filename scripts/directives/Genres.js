angular.module("myMoviesSeriesApp").directive("genres", ["$compile", function($compile) {

    return {
        restrict: "AE",
        scope:{
            collection: "="
        },
        link: function(scope, element){

            var view = "<div class='box-genres'>";

            for ( var f = 0, F = scope.collection.length; f < F; f++ ){

                view += "<span class='label label-danger'>" + scope.collection[f].name + "</span>";
            }

            view += "</div>";

            // Angular's going to instantiate a new element html with our string
            var newElement = angular.element(view);
            var newCompiledElement = $compile(newElement)(scope);

            element.replaceWith(newCompiledElement);
        }
    }
}]);