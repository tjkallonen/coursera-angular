(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://guarded-forest-63340.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
