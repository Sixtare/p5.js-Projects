var numPoints = 15;

function setup() {
  createCanvas(600, 400);
  background(0);
  
  storePointsx = [numPoints];
  storePointsy = [numPoints];
  
  drawPoints();

}

function draw() {
 drawLines();
  
}

function drawPoints(){
  
  
  for(var i = 0; i < numPoints; i++){
    stroke(255);
    strokeWeight(10);
    storePointsx[i] = random(0, width); 
    storePointsy[i] = random(0, height);
    point(storePointsx[i], storePointsy[i]);
    console.log(storePointsx[i]);
    console.log(storePointsy[i]);
  }
}

function drawLines(){
  for(var i = 0; i != numPoints - 1; i++){
    for(var j = 0; j != numPoints; j++){
      strokeWeight(2);
      stroke(random(0, 255), random(0, 255), random(0, 255));
      line(storePointsx[i], storePointsy[i], storePointsx[j], storePointsy[j]);
    }
    
  }  
  
}
