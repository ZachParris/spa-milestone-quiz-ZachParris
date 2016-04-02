"use strict"
// The second IIFE should augment the original one with a function that creates all of the `eventHandlers` that you need for the application. Name the function `activateEvents`.
//variables for everything

// var CarLot = (function (augCarLot) {
// // //Change the border thickness
// function activateEvents(){
// // document.addEventListener("DOMContentLoaded", function (event) {
// //   card.classList.toggle("newBorder");
// });





// })(CarLot || {});






//EXAMPLE

// document.addEventListener("DOMContentLoaded", function (event) {
//    var _selectorTwo = document.querySelector('input[id=large]');
//    _selectorTwo.addEventListener('change', function (event) {

//        if (_selectorTwo.checked) {
//            document.getElementById("chatBox").setAttribute("style", "font-size: 2em;");
//        } else {

//            document.getElementById("chatBox").setAttribute("style", "font-size: 1em;");
//        }
//    });
// });

















// //Clears input when enter is pressed.
// inputGrabber.addEventListener("keydown", function(event) {
//    if(event.keyCode == 13) {
//     inputGrabber.value = "";
//   };
// });

// }

// Makes border around selected div with id of person and focuses text box when clicked

// personContainer.addEventListener("click", function(event) {
//   if (event.target.closest('div').id === "person"){
//     target = event.target;
//     target.closest('div').classList.toggle("dotted");
//   };
// });


// // All of the event listeners for the app (this can be condensed into one eL)
// viewMusicLink.addEventListener("click", showViewForm);
// addMusicLink.addEventListener("click", showAddForm);
// addMusicButton.addEventListener("click", addSongsToArray);
// songHolder.addEventListener("click", function(clickEventObject) {
//   console.log(clickEventObject);
//   if (clickEventObject.target.className === "dlt-song") {
//     clickEventObject.currentTarget.removeChild(clickEventObject.target.parentElement);
//   };
//   clickEventObject.stopPropagation();
// });

// moreButton.addEventListener("click", function(){
//   getSongs(2);
// });



// function changeBackground(originalCarLot) {

// }

// function activateEvents() {
// 	for(let i = 0; i < card.length; i++){
// 		let currentCard = card[i];
// 		let currDescription = description[i];
// 		currentCard.addEventListener('click', function(){
// 			removeSelected();
// 			input.focus();
// 			currentCard.classList.add('selected');
// 			keyEvent(currentCard, currDescription);

// 		})
// 	}
// }

//wysiwyg!!
// function keyEvent(currentCard, currBio) {
// 	input.addEventListener("keyup", function(event){
// 		if(currentCard.classList.contains('selected')) {
// 			let newBio = event.currentTarget.value;
// 			currBio.innerHTML = newBio;
// 			if(event.keyCode === 13) {
// 				currBio.innerHTML = newBio;
// 				input.value = "";
// 			}
// 		}
// 		// console.log("currentCard", currentCard);
// 	})
// }





// // ------- Event listener and conditionals for dark-theme checkbox --------------- //

// let darkCheck = document.getElementById("checkBoxDarkTheme");

// darkCheck.addEventListener("click", function(){
//   textArea.classList.toggle("darkTheme");
// });


// // ------- Event listener for text box enter (also clears input box) ----------------- //

// let teBox = document.getElementById("tBox");
// let teArea = document.getElementById("textArea");
// teBox.addEventListener("keypress", function(e){

//   if (e.keyCode === 13){
//     e.preventDefault();
//     Chatty.addMessagesToArray(teBox.value);
//     teBox.value = "";
//   }

// });

// // ------- Event listener and conditionals for dark-theme checkbox --------------- //

// let largeCheck = document.getElementById("checkBoxLargeText");

// largeCheck.addEventListener("click", function(){
//   textArea.classList.toggle("largeText");
// });

// //TRANSLATE FUNCTION
// document.getElementById("transbtn").addEventListener("click", translate);

// function translate(){
//   if(document.getElementById("french").checked){
//     Translator.transFrench();
//   }
//   else if(document.getElementById("italian").checked){
//     Translator.transItalian();

//   }
//   else if(document.getElementById("spanish").checked){
//   Translator.transSpanish();
//   }
//   else {
//     Translator.transGerman(); 
//   }
// }











