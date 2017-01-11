function Ball(x, y) {
  this.x = x;
  this.y = y;
  this.col = color(50, 0, random(0, 255));

  this.display = function(){
    stroke(255);
    strokeWeight(3);
    fill(this.col);
    ellipse(this.x, this.y, 50);
  }

  this.clicked = function(){
    this.col = (255);
  }

  this.move = function(){
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }

}