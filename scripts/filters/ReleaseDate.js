// The name must be according to the next format: first letter needs to be lower case
// Only occurs in the filters
angular.module("myMoviesSeriesApp").filter("releaseDate", function () {

    return function (data) {

        return "It'll be realeased in: " + data;
    };

});