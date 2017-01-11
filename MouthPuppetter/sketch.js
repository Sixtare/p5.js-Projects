var mic;

function setup() {
  createCanvas(600, 400);  
  mic = new p5.AudioIn();
  mic.start();
  
}

function draw() {
  background(0);
  var vol = mic.getLevel();
  
  ellipse(width/2 - 100, 150, 80, 150);
  ellipse(width/2 + 100, 150, 80, 150);
  ellipse(width/2, 300, 200, 20 + vol * 500);
}