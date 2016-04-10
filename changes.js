"use strict"

var CarLot = (function selectedChanges(augCarLot) {
    
   
    augCarLot.addClickEvent = function(card, description) {
            var currDesc = document.getElementById(description);
            card.addEventListener('click', function() {
            	// console.log("you clicked me" );
                CarLot.removeSelected();
                input.focus();
                card.classList.add('selected');
                CarLot.keyEvent(card, currDesc);

            })
    }
    augCarLot.removeSelected = function() {
        var cards = document.getElementsByClassName('cards');
        for (var i = 0; i < cards.length; i++) {
            cards[i].classList.remove('selected');
            input.value = "";
           


        }
    }


    augCarLot.keyEvent = function(card, currDesc) {
        input.addEventListener("keyup", function(event) {
            if (card.classList.contains('selected')) {
                var newDesc = event.currentTarget.value;
                currDesc.innerHTML = newDesc;
                if (event.keyCode === 13) {
                    currDesc.innerHTML = newDesc;
                    input.value = newDesc;
                }
            }
        })
    };




return augCarLot;
})(CarLot || {});



var container = document.getElementsByClassName('container');
var input = document.getElementById('input');
var description = document.getElementsByClassName('description');




