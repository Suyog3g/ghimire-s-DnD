// select your elements first - what is the user going to interact with?
// These are the targets => these are what "user" uses
// this is a 1 to 1 connection to an element in the DOM
// let navButton = document.querySelector('#navButton');

// this is a 1 to many connection to an element in the DOM
// the variable name is the "basket"
let navButtons = document.querySelectorAll('#buttonHolder img'),
    theHeadline = document.querySelector('#headLine h1'),
	// collect draggable pieces in the drag zone
	puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),	
	// collect all of the drop zone elements
	dropZones = document.querySelectorAll('.drop-zone'),
	puzzleBoard = document.querySelector('.puzzle-board'),
	tempLink = document.querySelector('a'),
	// set up a global variable to store a reference to the dragged pieces
	// I need to know this later when I drop it on a zone
	draggedPiece;


// function go in the middle
// these are the "actions" that should happen
function changeBgImage() {
	
	// // object.property = "new value"
	// // theHeadline.textContent = "Drag and Drop is funny";
	// // theHeadline.classList.add("orange-headline");

	let newBGPath = "images/backGround" + this.id + ".jpg";
	// // debugger;
	//  change the background image in the drop zone
	puzzleBoard.style.backgroundImage = `url(images/backGround${this})`;
}

function handleStartDrag() { 
	console. log('started draggin a piece!',this);
	draggedPiece = this;
}
function handleDragOver(e) {
	e.preventDefault();
	console.log('dragging over me');}

	function handleDrop(e) { 
		e.preventDefault();
		// Only allow one piece to be dropped in a zone at a time
		if (this.children.length > 0) {
			console.log("Already a piece here");
			return;
		}
		this.appendChild(draggedPiece);
	}
	


//  process a collection of the elements and add an event handler to each
navButtons.forEach(button => button.addEventListener('click', changeBgImage));

// add the drag start handler to all the puzzle pieces
puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));

// add the dragover handling to the drop zones
dropZones.forEach(zone => zone.addEventListener('dragover', handleDragOver));
dropZones.forEach(zone => zone.addEventListener('drop', handleDrop));

function blockDefaultBehaviour(e) {
	// dont let the default behaviour of certain elements happen - block it
	e.preventDefault();
}

// temp handling
tempLink.addEventListener('click', blockDefaultBehaviour);