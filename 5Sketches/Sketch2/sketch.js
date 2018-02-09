function setup() {
    createCanvas(2000, 2000);
    background(0);
}

function draw() {
    if (mouseIsPressed) {
        fill('rgb(0,255,0)');
    } else {
        fill(25, 0, 120);
    }
    ellipse(mouseX, mouseY, 50, 60, 70);
}