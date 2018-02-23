
function setup() {
  createCanvas(600,400);
  frameRate(30);
  background(0);

}
function draw(){
 squares(10,10);
 squares(30,30);
 circles(50,50);
}
function squares(x,y){
  translate(x,y);
  push();
  stroke('#fae');
strokeWeight(1);
  fill(255,0,88);
  rect(100,100,10,10);
  rect(100,200,10,10);
  rect(100,300,10,10)
  pop();
}
function circles(x,y){
translate(x,y);
push();
stroke('#fae');
strokeWeight(1);
fill(255,0,88);
ellipse(100,100,10,10);
ellipse(100,200,10,10);
ellipse(100,300,10,10);
pop();
}