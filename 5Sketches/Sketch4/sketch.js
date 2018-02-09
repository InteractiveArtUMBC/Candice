function setup() {
    createCanvas(200, 200);
    background(0, 225, 220)
}

function draw() {
    if (mouseIsPressed) {
        fill(0, 25, 220);
      } else {
        fill(85, 20, 66);
        stroke('#fae');
strokeWeight(4);
      }
      quad(38, 31, 86, 20, 69, 63, 30, 76)
}