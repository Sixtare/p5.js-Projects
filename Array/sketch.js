var ellSize = [];
var cont = 0;
function setup(){
  createCanvas(600, 400);
  background(0);
  for(var i = 0; i < 50; i++){
    ellSize[i] = random(0, 70);
    console.log(ellSize[i]);
  }

}

function draw(){
  bola(ellSize[cont]);
  cont += 1;
  if(cont == ellSize.length){
     cont = 0;
  }


}
//transforme isso num objeto
function bola(diam){
  stroke(255);
  noFill();
  strokeWeight(3);
  ellipse(random(0, width), random(0, height), diam);

}
