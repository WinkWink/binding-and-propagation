// IIFE
// Pass window to make the game availble to window to the initial function and anon function
;(function(window){

	// game	is an object note the capital , el is going to be the element we drop our game into, option is which game we want to play, and thats where we'll pass our data thru
	var Game = function(el, option){
		this.el = document.getElementById(el);
		this.option = option;
		// 	info section
		this.info_div = document.createElement('div');
		this.info_div.id = "info_div";
		// 	deck
		this.deck_div = document.createElement('div');
		this.deck_div.id = "deck_div";
		this.gameDeck = new Deck(this.deck_div, option);
		this.gameDeck.buildDeck();
		// 	discard pile
		// 	rule
		this.el.appendChild(this.info_div);
		this.el.appendChild(this.deck_div);
	}

	
	// deck
	var Deck = function(deck_div,option){
		this.deckData = option.data;
		this.buildDeck = function(){
			var parentFrag = document.createDocumentFragment();
			deck_div.innerHTML = "";
			for (var i = this.deckData.length - 1; i >= 0; i--) {
				var card = new Card();
				card.id = "card-" + i;
				card.data = this.deckData[i];
				card.buildCard(parentFrag);

			}
			deck_div.appendChild(parentFrag);
		}
	}
	// 	cards
	// 	-----
	// 	shuffle function
	// 	stack function
	
	// cards 
	var Card = function(){
		this.id = "";
		this.data = "";
		this.cardCont = document.createElement("div");
		this.cardCont.className = "card_container";
		this.cardFront = document.createElement("div");
		this.cardFront.className = "card_front";
		this.cardBack = document.createElement("div");
		this.cardBack.className = "card_back";
		this.buildCard = function(parentFrag){
			var flipDiv = document.createElement("div"),
				frontValDiv = document.createElement("div"),
				backValDiv = document.createElement("div"),
				catDiv = document.createElement("div");
				flipDiv.className = "flip";
				frontValDiv.className = "front_val";
				backValDiv.className = "back_val";
				catDiv.className = "cat_val";

				frontValDiv.innerHTML = this.data.q;
				backValDiv.innerHTML = this.data.a;
				catDiv.innerHTML = this.data.category;

				this.cardFront.appendChild(frontValDiv);
				this.cardFront.appendChild(catDiv);
				this.cardBack.appendChild(backValDiv);
				flipDiv.appendChild(this.cardFront);
				flipDiv.appendChild(this.cardBack);

				this.cardCont.id = this.id;
				this.cardCont.appendChild(flipDiv);
				parentFrag.appendChild(this.cardCont);
		}

	}
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