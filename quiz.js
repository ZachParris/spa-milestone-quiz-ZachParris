"use strict"
function populatePage(inventory) {
	var container = document.getElementById('cardForEachCar')
        var buildString;
        for (var i = 0; i < inventory.length; i++) {
            var cardDiv = document.createElement("div");
            buildString = `<div class='col-sm-4 cards' id="card${i}"style="border: solid 2px  ${inventory[i].color} " `;
            buildString += `<h1>${inventory[i].make}</h1>`;
            buildString += `<h4>${inventory[i].model}</h4>`;
            buildString += `<h4>YEAR- ${inventory[i].year}</h4>`;
            buildString += `<h4>Price- $${inventory[i].price}</h4>`;
            buildString += `<h5>${inventory[i].color}</h5>`;
            buildString += `<p id= "description${i}">${inventory[i].description}</p>`;
            buildString += `</div>`;
            // container.innerHTML += buildString;
            cardDiv.innerHTML = (buildString);
            container.appendChild(cardDiv);
            var card = document.getElementById(`card${i}`);
            console.log("card", card);

            CarLot.addClickEvent(card, "description" + i);
        };
    }

		CarLot.loadInventory(showInventory);

    	function showInventory(){
    		var getCar = CarLot.getInventory();
    		populatePage(getCar);

    	};


















