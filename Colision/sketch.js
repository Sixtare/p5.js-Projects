var ball = [];
var button;
var col;
var slider;
var input;
var paraG;
function setup() {
  createCanvas(600, 400);
  col = color(0, 0, 0);
  
  paraG = createP('god plz help');
  button = createButton("Click me");
  slider = createSlider(0, 100, 45);
  input = createInput('Digite seu');
  button.mousePressed(isPushed);
  
  for(var i = 0; i < 10; i++){
    ball[i] = new Ball(random(0, width), random(0, height));
  }
  
}


function isPushed(){
  col = color(random(0, 255), random(0, 255), random(0, 255));
}

function draw() {
  background(col);
  fill(255);
  textSize(20);
  text(input.value(), width/2 , height/2);
  
  for(var i = 0; i < ball.length; i++){
    ball[i].display();
    ball[i].update();
    
    for(var j = i; j < ball.length; j++){
      if(ball[i].collide(ball[j]) && i != j){
      ball[i].changeColor();
      ball[j].changeColor();
      }  
    }
  }
  paraG.html(input.value()); 
   
}