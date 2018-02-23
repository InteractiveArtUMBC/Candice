
function setup() {
  createCanvas(400,400);
  frameRate(30);
  background(255,0,80);

}
function draw() {
  ellipse(100,100,100,100) 
  fill(0);

  ellipseMode(CENTER)
  fill(0)
  ellipse(100,100,30,30)
  
  ellipseMode(CORNERS); 
  fill(100);
  ellipse(80, 80, 50, 50);


}

