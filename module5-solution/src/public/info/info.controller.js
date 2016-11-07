(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['$http', 'ApiPath','UserService', 'user'];
function InfoController($http, ApiPath,UserService, user) {
  var infoCtrl = this;
  infoCtrl.user = user;
  infoCtrl.basePath = ApiPath

  if(infoCtrl.user){
    var addr="/menu_items/" + infoCtrl.user.favorite + ".json";
    $http.get(ApiPath + addr)
      .success(function (data){
        infoCtrl.menuitem=data;
      })
      .error(function (error, status){
        console.log("Get error: " + ApiPath + addr)
      });
  }
}


})();
