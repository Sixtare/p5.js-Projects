function Ball(x, y){
  this.x = x;
  this.y = y;
  this.r = 25;
  this.col = color(0);
  this.display = function(){
    stroke(255);
    strokeWeight(2);
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2);
  }
  
  this.update = function(){
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }
  
  this.changeColor = function(){
    this.col = color(random(0, 255), random(0, 255), random(0, 255));
  }

  this.collide = function(other){
    var d = dist(this.x, this.y, other.x, other.y);
    if(d < this.r + other.r){
      return true;
      } else {
        return false;
      }
  }
  
}