var litter;
var tricks;
var myString;
var myString1;
var myString2;
var d = 0;
var f = 0;

function preload() {
	litter = loadTable('litter.csv', 'csv', 'header')
	tricks = loadTable('tricks.csv', 'csv', 'header')
}

function setup() {
	//----------------sanity check--------------------
	// for (let r = 0; r < litter.getRowCount(); r++)
	//     for (let c = 0; c < litter.getColumnCount(); c++) {
	//       print(litter.getString(r, c));
	//     }
	// 	  for (let s = 0; s < tricks.getRowCount(); s++)
	//     for (let t = 0; t < tricks.getColumnCount(); t++) {
	//       print(tricks.getString(s, t));
	//     }
	createCanvas(windowWidth, 500);
	textAlign(CENTER);
	rectMode(CENTER);
	noStroke();
	showButton = new Button(width / 2, height / 2);
}

function draw() {
	background(255);
	showButton.display();
	push();
	text(myString, width / 2, height / 2 + 40);
	text(myString1, width / 2, height / 2 + 108);
	text(myString2, width / 2, height / 2 + 158);
}

function mouseClicked() {

	if (mouseX > width / 2 - 50 && mouseY > 150 - 22.5 && mouseX < width / 2 + 50 && mouseY < 150 + 22.5) {
		d++
		if (d > litter.getRowCount() - 1) {
			d = 0;
			// } else {
			// 	d++
		}
		myString = (litter.getString(d, 0));
	}
	if (mouseX > width / 2 - 50 && mouseY > 210 - 22.5 && mouseX < width / 2 + 50 && mouseY < 210 + 22.5) {
		f = Math.floor(Math.random(0, 1) * tricks.getRowCount() - 1);
		myString1 = (tricks.getString(f, 0));
		myString2 = (tricks.getString(f, 1));
	}
}
