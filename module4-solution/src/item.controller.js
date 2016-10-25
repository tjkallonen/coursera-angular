(function () {
'use strict';

angular.module('data')
.controller('ItemController', ItemController);


ItemController.$inject = ['MenuDataService', 'items'];
function ItemController(MenuDataService, items) {
  
  var itemslist = this;
  itemslist.items = items;
}

})();
