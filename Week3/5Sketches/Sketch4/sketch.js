
function setup() {
  createCanvas(400,400, WEBGL);

}

function draw() {
  c = color('hsl(263, 43%, 65%)');
  background(c);
  stroke(c)
  strokeWeight(4)
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(50, 15);
}

