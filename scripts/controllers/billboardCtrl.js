angular.module("myMoviesSeriesApp").controller("billboardCtrl", ["$scope", "ApiService", function($scope, ApiService) {//Injection of dependencies

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
    
}]);