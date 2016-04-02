"use strict"
// var CarLot = (function(augCarLot) {

    function populatePage(inventory) {
        var container = document.getElementById('cardForEachCar');
        var buildString = "";
        for (var i = 0; i < inventory.length; i++) {
            buildString += `<div class='col-sm-4'><header><h1>${inventory[i]}</h1></header><section><p>${currentCard.model}</p><p>${inventory[i]}</p><p>${inventory[i]}</p><p>${inventory[i]}</p><p>${inventory[i]}</p></div><br>`;

        container.innerHTML += buildString;
        }
    }
    	function showInventory(){
    		var getCar = CarLot.getInventory();
    		populatePage(getCar);

    	}

CarLot.loadInventory(showInventory);

console.log("CarLot", CarLot);














// augCarLot.buildCard = function(card) {
//     for (var t = 0; t < card.length; t++) {
//     	var currentCard = Carlot.getInventory[i];
//          buildString += `<div class='col-sm-4'><header><h1>${currentCard.make}</h1></header><section><p>${currentCard.model}</p><p>${currentCard.year}</p><p>${currentCard.price}</p><p>${currentCard.color}</p><p>${currentCard.description}</p></div><br>`;
//         document.getElementsByClassName('row').innerHTML += buildString;
//     }



    	// let i += inventory[i];
        // card.forEach(function(i) {
        //     cardBuilder = "<div id='cars' +  class='col-sm-4'>" + "<section>";
        //     cardBuilder += "<header>" + "<h2>" + i.make + "</h2>" + "<h4>" + i.model + "</h4>" + "</header>";
        //     cardBuilder += "<section>" + "<p> + i.year + </p>" + "<p>" + i.price + "</p>";
        //     cardBuilder += "<section>" + "<p>" + i.color + "</p>" + "<p>" + i.purchased + "</p>" + "</section>";
        //     cardBuilder += "<p id=" + '"' + "description" + '"' + "class=" + '"' + "description" + '"' + ">" + i.description + "</p>" + "</section>";
        //     cardBuilder += "</section" + "</div>"
        //     container.innerHTML += cardBuilder;
        // });
        // console.log("buildCard", buildCard);




// // Load the inventory and send a callback function to be
// // invoked after the process is complete
// CarLot.loadInventory(populatePage);
// ```

// function buildCard(person) {
// 	container.innerHTML += `<person class="card"><header>${person.title}${person.name}</header><section><p class="bio">${person.bio}</p><img src="${person.image}"><footer>${person.lifespan.birth}-${person.lifespan.death}<footer><person>`

// var Chatty = (function(oldChatty) {
// 	var newMessage = document.getElementById("chatBox");
// 	var textBox = document.getElementById("textBox")
// 	var userMessages = [];


// 	oldChatty.displayMessages = function() {
// 		var buildString;
// 		for(var i = 0; i < Chatty.getChat().length; i++) {
// 			buildString = `<div><p>${Chatty.getChat()[i]}</p></div>`;
// 			textBox.innerHTML += buildString;
// 			console.log("msg", Chatty.getChat()[i]);
// 		}





