angular.module("myMoviesSeriesApp").controller("moviesDetailsCtrl", ["$scope", "Movie", "ApiService", function($scope, Movie, ApiService){

    $scope.movie = Movie.data;

    $scope.pathImage = function(path){

        return ApiService.getPathImage(150, path)
    };
}]);