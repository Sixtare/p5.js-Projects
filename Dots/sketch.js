var col = {
  r: 0,
  b: 0,
  g: 0
};

var spot = {
  x: 0,
  y: 0
};

function setup() {
  createCanvas(600, 400);
  background(0);
 
}

function draw() {
  spot.x = random(0, 600);
  spot.y = random(0, 400);
  
  col.r = random(0, 255);
  col.b = random(0, 255);
  col.g = random(0, 255);
  
  noStroke()
  fill(col.r, col.b, col.g, 150);
  ellipse(spot.x, spot.y, 30, 30);
  
 
}






