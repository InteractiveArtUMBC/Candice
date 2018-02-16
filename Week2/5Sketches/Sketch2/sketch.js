function setup(){
    createCanvas(260,260);
    background(0)
}

function draw(){
    rectangles(10,10);
    rectangles(20,20);
    rectangles(30,30);
    rectangles(40,40);
    rectangles(50,50);
    rectangles(60,60);
    rectangles(70,70);
    rectangles(80,80);
    rectangles(90,90);
    rectangles(100,100);
    rectangles(110,110); 
    rectangles(120,120);
    rectangles(130,110);
    rectangles(140,100);
    rectangles(150,90);
    rectangles(160,80);
    rectangles(170,70);
    rectangles(180,60);
    rectangles(190,50);
    rectangles(200,40);
    rectangles(210,30);
    rectangles(220,20);
    rectangles(230,10);
}

function rectangles(x,y){
    fill(88,0)
    stroke(color(255, 204, 0));
strokeWeight(2);
    rect(x+10, y+10, 10, 10);
   
}
