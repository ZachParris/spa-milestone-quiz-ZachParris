"use strict"
// The second IIFE should augment the original one with a function that creates all of the `eventHandlers` that you need for the application. Name the function `activateEvents`.

var CarLot = (function (augCarLot) {

	// augCarLot.activateEvents = function() {
	// 	CarLot.newValues();
	// 	CarLot.addClickEvent();
	// 	CarLot.removeSelected();
	// 	CarLot.keyEvent();
	// };
	


	return augCarLot;
})(CarLot || {});







// CarLot.originalValues();
// CarLot.newValues();
// CarLot.addClickEvent();
// CarLot.removeSelected();
// CarLot.keyEvent();
// CarLot.selectedChanges();

// CarLot.activateEvents(); 