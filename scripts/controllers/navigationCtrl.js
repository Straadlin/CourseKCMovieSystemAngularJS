/**
 * Created by estra on 03-Feb-17.
 */
angular.module('myMoviesSeriesApp').controller('navigationCtrl', ['$scope', '$routeSegment', function($scope, $routeSegment) {//Injection of dependencies

    $scope.pathIsMovies = function(){

        // It'll return true or false
        return $routeSegment.startsWith('movies');
    };

    $scope.pathIsSeries = function(){

        // It'll return true or false
        return $routeSegment.startsWith('series');
    };

}]);