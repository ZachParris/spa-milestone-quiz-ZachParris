"use strict"

var CarLot = (function() {
    var inventory = [];

    return {
        getInventory: function() {
            return inventory;
        },
        loadInventory: function(callbackToInvoke) {
            var inventoryLoader = new XMLHttpRequest();

            inventoryLoader.addEventListener("load", loadJson);

            inventoryLoader.open("GET", "inventory.json");
            inventoryLoader.send();


            function loadJson() {
                inventory = JSON.parse(this.responseText).cars;
                callbackToInvoke();
            };
        }
    };

})();


