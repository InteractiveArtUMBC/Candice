function setup(){
    createCanvas(300,300);
    background(24,0,55)
}

function draw(){
    squares(10,10);
    squares(20,20);
    squares(30,30);
    squares(40,40);
}

function squares(x,y){
    fill(26,0,55)
    stroke('#fae');
strokeWeight(4);
    rect(x+20,y+20,100,100);

}
