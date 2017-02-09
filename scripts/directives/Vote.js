angular.module("myMoviesSeriesApp").directive("vote", ["$compile", function($compile){

    return{

        restrict: "AE",
        //replace: true,
        scope: {
            mediaVote: "@"
        },
        // It can have the next syntax in the next order: (scope, element, attributes)
        // We use element because we're going to replace with other element
        link: function(scope, element){
//debugger;
            var mediaAsNumber = parseFloat(scope.mediaVote);
            var mediaRounded = Math.round(mediaAsNumber);

            var view = "<div>";

            for( var f = 0; f < mediaRounded; f++ ){

                view += "<span class='glyphicon glyphicon-star'></span>";
            }

            for( var f = 0, F = 10 - mediaRounded; f < F; f++ ){

                view += "<span class='glyphicon glyphicon-star-empty'></span>";
            }

            view += "</div>";

            // This is like $() in jQuery
            var newElement = angular.element(view);

            // Scope is injected next to newElement to understand themselves inside of $compile.
            // This step is necessary because this directive doesn't have a template.
            var newCompiledElement = $compile(newElement)(scope);

            element.replaceWith(newCompiledElement);
        }
    };
}]);