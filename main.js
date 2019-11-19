// IIFE
// Pass window to make the game availble to window to the initial function and anon function
;(function(window){

	// game	is an object note the capital , el is going to be the element we drop our game into, option is which game we want to play, and thats where we'll pass our data thru
	var Game = function(el, option){

	}
	// 	info section
	// 	deck
	// 	discard pile
	// 	rules
	
	// deck
	// 	cards
	// 	-----
	// 	shuffle function
	// 	stack function
	
	// cards 
	// 	value
	// 	suit
	// 	----
	// 	flip function
	
	// discard pile 
	// 	holders
	// 	------
	// 	accept or reject 
	window.Game = Game;
})(window);