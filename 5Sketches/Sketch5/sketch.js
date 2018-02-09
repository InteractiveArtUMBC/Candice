function setup() {
    createCanvas(110, 110);
    background(0)
}

function draw() {
    stroke('rgba(0,255,0,0.25)');
    strokeWeight(4);
    arc(50, 50, 80, 80, 0, PI + QUARTER_PI, CHORD)
    fill('rgba(100%,0%,100%,0.5)')
    stroke('rgba(100%,0%,100%,0.5)')
    strokeWeight(4);
    arc(60, 60, 80, 80, 0, PI + QUARTER_PI, CHORD)
    fill('rgba(0,255,0,0.25)')
    

}
