function setup(){
    createCanvas(300,300);
    background(44,0,55)
}

function draw(){
    circles(10,10);
    circles(20,20);
    circles(30,30);
    circles(40,40);
    circles(50,50);
    circles(60,60)
}

function circles(x,y){
    fill(88,0,)
    stroke('rgba(0,255,0,0.25)');
strokeWeight(3);
    ellipse(x+100,y+95,100,100);

}
