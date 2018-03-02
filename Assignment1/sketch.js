function setup() {
  createCanvas(1000,600);

}
function draw(){
  noFill();
colorMode(RGB, 255, 255, 255, 1);
background(102, 0, 198);
for (var i=0; i<width; i++) {
  stroke(i/width * 102, 0, 198);
   line(i, 0, i, height);
}


strokeWeight(4);
stroke(214, 186, 239);
ellipse(40, 40, 50, 50);
ellipse(50, 50, 40, 40);
ellipse(60, 60, 30, 30)

line(600, 490, 25, 25)

  noFill();
rect(306, 400, 100, 100)
rectMode(CORNER);
  noFill();
rect(306, 404, 50, 50);
rect(500, 500, 80, 80);

  noFill();
ellipse(900,200,40,40)
ellipse(900, 300, 100, 100)

noFill();
triangle(130, 175, 158, 120, 186, 175)
triangle(230, 275, 258, 140, 190, 175)

line(200, 500, 55, 55)
line(1000, 100, 70, 70)
line(600, 600, 1000, 1000)

  noFill();
quad(138, 531, 186, 620, 769, 863, 430, 376)

line(900, 200, 900, 275);
line(700,445,600,865);

  noFill();
  arc(480, 255, 50, 50, 0, HALF_PI);
noFill();
arc(480, 255, 60, 60, HALF_PI, PI);
arc(480, 255, 70, 70, PI, PI + QUARTER_PI);
arc(900, 450, 180, 180, 0, PI + QUARTER_PI, PIE);
}