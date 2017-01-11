var balls = [];

function setup() {
  createCanvas(600, 400);
  for(var i = 0; i < 6; i++){
   var x = random(width);
   var y = random(height);
   balls.push(new Ball(x, y));
  }
}

function draw() {
  background(0);
  for(var i = 0; i < balls.length; i++){
    balls[i].display();
    balls[i].move();

  }
}

function mousePressed(){

  for(var i = 0; i < balls.length; i++){
    var d = dist(balls[i].x, balls[i].y, mouseX, mouseY);
    if(d <= 25){
      balls[i].clicked();

    }
  }
}
