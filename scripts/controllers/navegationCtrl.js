angular.module('myMoviesSeriesApp').controller('navegationCtrl', ['$scope', '$routeSegment', function($scope, $routeSegment) {//Injection of dependences

    $scope.pathIsMovies = function(){

        return $routeSegment.startsWith('movies');
    };

    $scope.pathIsSeries = function(){

        return $routeSegment.startsWith('series');
    };

}]);