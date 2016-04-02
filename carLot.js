// "use strict"
// This is the main iife that gets augmented by the other js files

var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function () {
      return inventory;
    },
    loadInventory: function (callBackFunction) {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function() {
        inventory = JSON.parse(this.responseText).cars;
        // console.log("inventory", inventory);
        callBackFunction(inventory);
      });

        inventoryLoader.open("GET", "inventory.json");
        inventoryLoader.send();
    }
  };

})();

// CarLot.loadInventory();

