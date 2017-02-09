// Promises: Way 1
angular.module("myMoviesSeriesApp").controller("comingSoonCtrl", ["$scope", "$filter", "Movies", "$location", function($scope, $filter, Movies, $location) {//Injection of dependencies

    $scope.movies = $filter("orderBy")(Movies.data.results, "release_date");
//debugger;
    /*$scope.pathImage = function(path){

        return ApiService.getPathImage(45, path)
    };*/

    $scope.seeDetail = function(id){

        // The function $location.path will show the next view.
        // Search is to concat parameters in the url like JSON format. With or Without slash at the end.
        $location.path("/movies/moviesdetails/").search({ idMovie: id });
    };
    
}]);
/*angular.module("myMoviesSeriesApp").controller("comingSoonCtrl", ["$scope", "ApiService", "$filter", function ($scope, ApiService, $filter) {//Injection of dependences

    ApiService
        .consultApi("movie/upcoming")
        .then(
            function(result){

                // Good
                // I used filter from a controller -> (nameFilter) + (data) + (nameFilter)
                $scope.movies = $filter("orderBy")(result.data.results, "release_date");
            },
            function(){
                
                // Bad
                alert("Something haven't gone good.")
            }
        );

}]);*/

// Promises: Way 2 (Personalized)
/*angular.module("myMoviesSeriesApp").controller("comingSoonCtrl", ["$scope", "$http", "$q", "$timeout", function($scope, $http, $q, $timeout) {//Injection of dependences

    function useDiferred(){

        var diferred = $q.defer();

        //$timeout(function(){ diferred.resolve(); }, 2000);// All good
        $timeout(function(){ diferred.reject("Error: X01X"); }, 2000);// All bad

        return diferred.promise;
    }

    useDiferred().then(
        function(){
            alert("Todo salio bien.")},
        function(error){
            alert("Algo salio mal. " + error)
        }
    );
    
}]);*/
