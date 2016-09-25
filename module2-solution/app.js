(function() {
        'use strict';

        angular.module('ShoppingListCheckOff', [])
            .controller('ToBuyShoppingController', ToBuyShoppingController)
            .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
            .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

        ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

        function ToBuyShoppingController(ShoppingListCheckOffService) {
            var toBuyList = this;

            toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

            toBuyList.buyItem = function(itemIndex) {
                ShoppingListCheckOffService.buyItem(itemIndex);
            };
        }

        AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

        function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
            var boughtList = this;

            boughtList.items = ShoppingListCheckOffService.getBoughtItems();
        }


        function ShoppingListCheckOffService() {
            var service = this;

            // List of shopping items
            var to_buy = [{
                name: "bottles of beer",
                quantity: 99
            },{
                name: "hamburgers",
                quantity: 5
            },{
                name: "pizzas",
                quantity: 2
            },{
                name: "hot dogs",
                quantity: 10
            },
            {
                name: "cookies",
                quantity: 10
            }];
            var bought = [];

            service.buyItem = function(itemIdex) {
                bought.push(to_buy[itemIdex]);
                to_buy.splice(itemIdex, 1);
            };

            service.getToBuyItems = function() {
                console.log(to_buy.length);
                return to_buy;
            };
            service.getBoughtItems = function() {
                return bought;
            };
          }
})();
