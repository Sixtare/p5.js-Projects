var ball = [];
var d;
function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  background(0);
    for(var i = ball.length - 1; i >= 0; i--){
     ball[i].display();
     ball[i].update();
     if(ball[i].isFinished()){
       ball.splice(i, 1);
     }
    }
}

function mousePressed(){
  var b = new Ball(mouseX, mouseY);
  ball.push(b);
}

