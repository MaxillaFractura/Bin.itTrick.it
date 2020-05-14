class Button {
  constructor(xpos, ypos, size) {
    this.x = xpos;
    this.y = ypos;
    this.size = size;
    this.width = this.height * this.size;
    this.height = 45;
  }

  display() {
    push();
    fill('black');
    textSize(32);
    text('Found Some Trash?', this.x, this.y - 40);
    text('Bin.it!', this.x, this.y + 10);
    pop();

    if (mouseX > this.x - this.width / 2 && mouseY > this.y - this.height / 2 &&
      mouseX < this.x + this.width / 2 && mouseY < this.y + this.height / 2) {
      var t = true;
      fill('red');
      // if (t = true && mouseIsPressed) {
      // 	fill('white');
      // }
    } else {
      fill(100);
    }
    rect(this.x, this.y, this.width, this.height, 20);
  }
}
