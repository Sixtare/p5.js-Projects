var randomColor = {
  r: 0,
  g: 0,
  b: 0,
}

var sped = {
  x: 0,
  y: 0,
}
//sped = Speed que a bola recebe a cada frame
var ballMove = {
  x: 100,
  y: 200,
}
//ballMove == Spawn/ Local onde ellipse está
function setup() {
  createCanvas(600, 400);
  sped.x = random(0, 10);
  sped.y = random(0, 10);
  
}

function draw() {
  background(randomColor.r, randomColor.g, randomColor.b);
 
  ballshow();
  ballmove();
  ballbounce();
  
}

function ballmove(){
  ballMove.x += sped.x;
  ballMove.y += sped.y;
  
}

function ballbounce(){
  if(ballMove.x > width || ballMove.x < 0){
    sped.x *= -1;
    randomColor.r = random(0, 255);
    randomColor.g = random(0, 255);
    randomColor.b = random(0, 255);
  }
  
  if(ballMove.y > height || ballMove.y < 0){
    sped.y *= -1;
    randomColor.r = random(0, 255);
    randomColor.g = random(0, 255);
    randomColor.b = random(0, 255);
  }
  
}

function ballshow(){
  strokeWeight(3);
  stroke(255);
  fill(255 - randomColor.r, 255 - randomColor.g, 255 - randomColor.b);
  ellipse(ballMove.x, ballMove.y, 40);
  
}
