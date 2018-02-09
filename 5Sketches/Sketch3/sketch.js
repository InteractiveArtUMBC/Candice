function setup() {
    createCanvas(400, 200);
    background(60, 20, 40)
    ellipse(90,90)
}

function draw() {
    stroke(color(0, 0, 255));
    strokeWeight(4);
    fill(0)
    triangle(30, 75, 58, 20, 86, 75);
    rect(50,50,50,50)
    ellipse(100,50,20)
    ellipse(30,60,50)
    line(30, 30, 85, 75);
    stroke(color(0, 0, 25));
    strokeWeight(4);
    fill(color(0,0,255))
    ellipse(300,50,50)
    rect(260,60,30,20)
    ellipse(350,40,30)
}