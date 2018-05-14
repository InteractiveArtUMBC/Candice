var weather;
function preload() {
  var url =
   'http://api.openweathermap.org/data/2.5/weather?q=Nuuk&APPID=f1d70f8608474d04652f1a58ed185dbb';

  weather = loadJSON(url);
}
function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  console.log(weather);
}
function draw() {
  var weathertemp = weather.main.temp;
  var weathertemp= Math.floor(Math.trunc((weather.main.temp)*9/5-459.67));
  var cityname = weather.name;
  var windspeed = weather.wind.speed;
  textAlign(LEFT);
  text(weathertemp, 0, height - 200, width, 100);
  text(cityname, 0, height - 100, width,  100);
  text(windspeed, 0, height - 300, width, 100);
  fill(115,186,239);
  textSize(14);
  stroke(255);
  stokeWeight(10);
}
function draw() {
    background(115, 186, 239);
    var weathertemp = weather.main.temp;
    var weathertemp= Math.floor(Math.trunc((weather.main.temp)*9/5-459.67));
    var cityname = weather.name;
    var windspeed = weather.wind.speed;
    var humidity = weather.main.humidity;
    var rain = weather.weather[0].main;

//middle
    noStroke();
    fill(229, 229, 229);
    triangle(0,15,0,620,420,750);
    fill(249, 249, 249);
    noStroke();
    ellipse(-5,10,100,100); 


//middle
    fill(249, 249, 249);
    noStroke();
    rotateZ(millis() / 1000*windspeed);
    rect(-25, -140, 40, 280);
    rect(-155, -20, 299, 40)

}

    




  
