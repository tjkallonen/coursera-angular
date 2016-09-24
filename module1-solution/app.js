(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";
  $scope.data ="";

  $scope.check = function () {
    if(  $scope.data == ""){
      $scope.message = "Please enter data first";
    }
    else{
      var count=$scope.data.split(",").length;
      if(count<=3){
        $scope.message = "Enjoy!";
      }
      else{
          $scope.message = "Too much!";
      }
    }
  };
}

})();
