angular.module("myMoviesSeriesApp").controller("billboardCtrl", ["$scope", "Movies", "$location", function($scope, Movies, $location) {//Injection of dependencies

    $scope.movies = Movies.data.results;

    $scope.seeDetail = function(id){

        // The function $location.path will show the next view
        // Search is to concat parameters in the url like JSON format
        $location.path("/movies/moviesdetails").search({ idMovie: id });
    };

}]);

/*angular.module("myMoviesSeriesApp").controller("billboardCtrl", ["$scope", "ApiService", function($scope, ApiService) {//Injection of dependencies

    ApiService
    .consultApi("movie/now_playing")
    .then(
        function(result){

            //Good
            $scope.movies = result.data.results;
        },
        function(){
            
            //Bad
            alert("Something haven't gone good.")
        }
    );
    
}]);*/