class Button {
  constructor(xpos, ypos) {
    this.x = xpos;
    this.y = ypos;
  }

  display() {
    push();
    if (mouseX > width / 2 - 50 && mouseY > 150 - 22.5 && mouseX < width / 2 + 50 && mouseY < 150 + 22.5) {
      fill('red');
    } else {
      fill(100);
    }
    rect(width / 2, 150, 100, 45, 20);
    pop();
    push();
    if (mouseX > width / 2 - 50 && mouseY > 210 - 22.5 && mouseX < width / 2 + 50 && mouseY < 210 + 22.5) {
      fill('green');
    } else {
      fill(100);
    }
    rect(width / 2, 210, 130, 45, 20);
    pop();
    push();
    textSize(50);
    text('Found Some Trash?', width / 2, 100 - 40);
    pop();
    textSize(32);
    text('Bin.it!', width / 2, 150 + 10);
    text('Trick.it!', width / 2, 210 + 10);
  }
}
