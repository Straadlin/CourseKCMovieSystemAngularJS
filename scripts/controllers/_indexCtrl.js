angular.module('myMoviesSeriesApp').controller('indexCtrl', ['$scope', function($scope){

    // Notifications

    $scope.ToDown = function(){

        $scope.$broadcast('EventToDown', 'TextBroadcast');
    }

    $scope.$on('EventToUp', function(event, data){
        //event.stopPropagation(); // It's to stop the propagation through the hierarchy

        alert(data);
    });

    ////////////////////////////////////

    // $watch

    /*$scope.$watch(

        function(){

            return $scope.checkboxValue;
        },

        function (newValue, oldValue){

            if(newValue != undefined && oldValue != undefined)
                alert('New value: ' + newValue + '\r\nOld value: ' + oldValue);
        }
    );*/

    ////////////////////////////////////
    
    /*//$scope.name = 'John Doe';
    
    $scope.greet = function(){
        alert('Hi, good afternoon!');
    };

    $scope.count = function(){
        alert('1 2 3');
    }*/

}]);
