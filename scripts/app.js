angular.module("myMoviesSeriesApp", ['ngRoute', 'route-segment', 'view-segment']);

angular.module("myMoviesSeriesApp").config(['$routeSegmentProvider', "$routeProvider", function ($routeSegmentProvider, $routeProvider) {

    $routeSegmentProvider.when('/movies', 'movies');// Level 0
    $routeSegmentProvider.when('/movies/comingsoon', 'movies.comingsoon');// Level 1
    $routeSegmentProvider.when('/movies/billboard', 'movies.billboard');// Level 1
    $routeSegmentProvider.when("/movies/moviesdetails", "movies.moviesdetails");// Level 1
    $routeSegmentProvider.when('/series', 'series');// Level 0
    $routeSegmentProvider.when('/series/today', 'series.today');// Level 1
    $routeSegmentProvider.when('/series/broadcast', 'series.broadcast');// Level 1
    $routeProvider.otherwise({
        // If doesn't find the correct path then it will redirect to the next path, using the RouteProvider
        redirectTo: "movies/comingsoon"
    });

    $routeSegmentProvider.segment('movies', {
        controller: 'moviesCtrl',
        templateUrl: 'views/movies.html'
    });

    $routeSegmentProvider.within('movies').segment('comingsoon', {
        controller: 'comingSoonCtrl',
        templateUrl: 'views/comingsoon.html',
        resolve: {
            // All dependences that I want to
            Movies: ["ApiService", function (ApiService) {

                return ApiService.consultApi("movie/upcoming");
            }]
        },
        resolveFailed: [
            // This block it'll execute if there are error with some dependence in the Resolve
        ]
    });

    $routeSegmentProvider.within('movies').segment('billboard', {
        controller: 'billboardCtrl',
        templateUrl: 'views/billboard.html'
    });

    $routeSegmentProvider.within("movies").segment("moviesdetails", {
        controller: "moviesDetailsCtrl",
        templateUrl: "views/moviesDetails.html",
        resolve: {
            Movie: ["ApiService", "$routeParams", function(ApiService, $routeParams){

                return ApiService.consultApi("movie/" + $routeParams.idMovie);
            }]
        }
    });

    $routeSegmentProvider.segment('series', {
        controller: 'seriesCtrl',
        templateUrl: 'views/series.html'
    });

    $routeSegmentProvider.within('series').segment('today', {
        controller: 'todayCtrl',
        templateUrl: 'views/today.html'
    });

    $routeSegmentProvider.within('series').segment('broadcast', {
        controller: 'broadcastCtrl',
        templateUrl: 'views/broadcast.html'
    });

}]);