var x = 100;


function setup() {
  createCanvas(600,400);
  frameRate(30);

}
function draw(){
  background(0);


  x+=10;
  if(x > width-50){
    x = 50;

  }
stroke(90);
stroke(255,204,0)
//strokeWeight(1);
fill(0,0,225);
// rectMode(CENTER);
rect(x,100,50,50);
fill(255,0,255);
rect(100,x,40,40);
fill(255,88,0)
rect(100,100,30,30);
}