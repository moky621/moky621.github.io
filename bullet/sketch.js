// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 5;
    this.dx = 10;
  }
  move(){
    this.x += this.dx;
  }
  display() {
    fill("black");
    circle(this.x, this.y, this.radius*2);
  }
 
}

let bulletArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let i = 0; i < bulletArray.length; i++){
    bulletArray[i].move();
   
    bulletArray[i].display();
    
  }

}

function mousePressed(){
  let pro = new Bullet(0, random(height));
  bulletArray.push(pro);
}
