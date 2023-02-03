// select your elements first - what is the user going to interact with?
// These are the targets => these are what "user" uses
// this is a 1 to 1 connection to an element in the DOM
// let navButton = document.querySelector('#navButton');

// this is a 1 to many connection to an element in the DOM
// the variable name is the "basket"
let navButtons = document.querySelectorAll('#buttonHolder img'),
    theHeadline = document.querySelector('#headLine h1'),
	puzzleBoard = document.querySelector('.puzzle-board');


// function go in the middle
// these are the "actions" that should happen
function changeBgImage() {
	
	// object.property = "new value"
	// theHeadline.textContent = "Drag and Drop is funny";
	// theHeadline.classList.add("orange-headline");

	let newBGPath = "images/backGround" + this.id + ".jpg";
	// debugger;
	// change the background image in the drop zone
	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

// event handling at the bottom : how things react when you 
//  how it the user going to interact with elements/ controls your provide?

//  process a collection of the elements and add an event handler to each
navButtons.forEach(button => button.addEventListener('click', changeBgImage));

