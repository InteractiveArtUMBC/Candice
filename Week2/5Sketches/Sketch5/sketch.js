function setup() {
    createCanvas(300, 300, WEBGL);
  }
  function draw() {
    background('rgba(0,255,0, 0.25)');
    rotateX(millis() / 1000);
    fill(0,0,255)
    box();

    rotateY(millis() / 1000);
    fill(0,0,255)
    box();
  }