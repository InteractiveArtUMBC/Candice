function setup(){
    createCanvas(300,300);
    background(0)
}

function draw(){
    triangles(10,10);
    triangles(20,20);
    triangles(30,30);
    triangles(40,40);
    triangles(50,50);
    triangles(60,60);
    triangles(70,70);
    triangles(80,80);
    triangles(90,90);
    triangles(100,100);  
}

function triangles(x,y,z){
    fill(88,0)
    stroke(color(0, 0, 255));
strokeWeight(2);
    triangle(x+80, y+90, z+100, 30, 96, 55);

}
