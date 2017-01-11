var numPoints = 10;

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
    
      strokeWeight(2);
      stroke(255,20,147);
      line(storePointsx[i], storePointsy[i], storePointsx[i + 1], storePointsy[i + 1]);
    
    
  }  
  
}
