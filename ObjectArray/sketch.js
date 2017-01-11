var balls = [];


function setup() {
  createCanvas(600, 400);

}

function draw() {
  background(0);  
  for(var i = 0; i < balls.length; i++){
    balls[i].move();
    balls[i].display();
    
    
  }
  
  
  if(balls.length > 50){
    balls.splice(0, 1);
  }
  
}

function mouseDragged(){
  balls.push(new Ball(mouseX, mouseY));
}

function Ball(x, y){
  this.x = x;
  this.y = y;
  this.display = function(){
    noFill();
    stroke(255);
    strokeWeight(3);
    ellipse(this.x, this.y, 50);
  }
  this.move = function(){
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }
}