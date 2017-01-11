function Ball(x, y){
  this.x = x;
  this.y = y;
  this.d = 50;
  this.lifespam = 255;
 
  this.display = function(){
    stroke(255);
    strokeWeight(3);
    fill(0);
    ellipse(this.x, this.y, this.d);
  }
  
  this.update = function(){
    this.x += random(-1, 1);
    this.y += random(-1, 1);
    this.lifespam -= 1;
  }
  
  this.isFinished = function(){
    if(this.lifespam < 0){
      return true;
    }else{
      return false;
    }
  }
    
  
}