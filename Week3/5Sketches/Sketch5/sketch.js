
var x = 100;
var y = 100;
var xspeed = 9;
var yspeed = 10;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background (65, 119, 97);

}

function draw() {

	//distance from center of the screen
  	fill (random(0, 60), random(200, 20), random(20, 250));
  	rect (x, y, 20,20);

  	//bouncing horizontally
 	 x = x + xspeed;
  	
  	 if (x > windowWidth || x < 0)  {
     	xspeed = -xspeed;
  	}

  	//bouncing veritcally≠
  	y = y + yspeed;

  	if (y > windowHeight || y < 0) {
	 	  yspeed = -yspeed;
  	}

}

