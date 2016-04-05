"use strict"
// The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
//     1. A car DOM element that was clicked on.
//     1. A color name.


var CarLot = (function selectedChanges(augCarLot) {
    
   
    //loop thru to add a Click event to each element to target description portion
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
//function to remove selected from element
    augCarLot.removeSelected = function() {
        var cards = document.getElementsByClassName('cards');
        for (var i = 0; i < cards.length; i++) {
            cards[i].classList.remove('selected');
            input.value = "";
           


        }
    }

    //function to reset the description in the selected element

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




