(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


function UserService() {
  var service = this;

  service.setUser = function (usr) {
    service.user=usr;
    console.log(service.user);
  };
  service.getUser = function () {
    return service.user;
  };
}



})();
