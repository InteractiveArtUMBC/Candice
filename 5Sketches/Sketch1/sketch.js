function setup() {
    createCanvas(400, 400);
    background(60, 40)
}

function draw() {
    if (mouseIsPressed) {
        fill(0, 25, 220);
      } else {
        fill(255,85, 20);
      }
    rect(mouseX, mouseY, 30, 20, 55, 55, 20)
    ellipse(mouseX, mouseY, 30, 20)
}