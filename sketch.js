
var litter;
var tricks;
var rowsl;
var rowst;
var Combo;

function preload() {
	litter = loadStrings('litter.csv')
	tricks = loadStrings('tricks.csv')
}

function setup() {
	createCanvas(300, 300);
	textAlign(CENTER);
	rectMode(CENTER);
	noStroke();
 	for (var i = 0; i < tricks.length; i++) {
		rowst = (split(tricks[i],'\n').slice(1));
	}
	for (var t = 0; t < litter.length; t++) {
		rowsl = (split(litter[t],'\n').slice(1));
	}

	print(rowst);
	print(rowsl);
	if (mouseIsPressed) {
		Combo = random(rowst) + random(rowsl);
	}
}

function draw() {
	push();
	textSize(20);
	text(Combo, width / 2, height / 2 + 50);
	pop();
	push();
	if (mouseX > width / 2 - 50 && mouseY > height / 2 - 22.5 && mouseX < width / 2 + 50 && mouseY < height / 2 + 22.5) {
		fill('red');
	} else {
		fill(100);
	}
	rect(width / 2, height / 2, 100, 45, 20);
	pop();
	textSize(32);
	text('Found Some Trash?', width / 2, height / 2 - 40);
	text('Bin.it!', width / 2, height / 2 + 10);
}
