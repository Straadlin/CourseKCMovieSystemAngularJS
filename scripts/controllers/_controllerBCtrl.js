angular.module('myMoviesSeriesApp').controller('controllerBCtrl', ['$scope', function($scope){

    $scope.$emit('EventToUp', 'TextEmit');

    $scope.$on('EventToDown', function(event, data){
        alert(data);
    });
}]);