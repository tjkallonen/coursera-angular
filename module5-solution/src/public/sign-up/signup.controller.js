(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['$http', 'ApiPath', 'UserService'];
function SignupController($http, ApiPath, UserService) {
  var signupCtrl = this;

  signupCtrl.submit = function () {

    var addr="/menu_items/"+signupCtrl.user.favorite+".json";

    $http.get(ApiPath + addr)
      .success(function (data){
        signupCtrl.userFavoriteError=false;
        signupCtrl.completed = true;
        UserService.setUser(signupCtrl.user);
      })
      .error(function (error, status){
        console.log("Get error: " + ApiPath + addr)
        signupCtrl.userFavoriteError=1;
      });



  };
}


})();
