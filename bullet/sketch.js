// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


class Bullet {
  constructor(x, y, theImage) {
    this.x = x;
    this.y = y;
    this.radius = 5;
    this.dx = 10;
    this.image = theImage;
  }
  move(){
    this.x += this.dx;
  }
  display() {
    // fill("black");
    // circle(this.x, this.y, this.radius*2);
    image(this.image, this.x, this.y, this.image.width*0.3, this.image.height*0.3);
  }

  isDead() {
    return this.x <= width;
  }
 
}

let bulletArray = [];
let bulletImg;

function preload() {
  bulletImg = loadImage("bullet.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let i = 0; i < bulletArray.length; i++){
    bulletArray[i].move();
    
    bulletArray[i].display();
    // if (bulletArray[i].isDead) {
    //   bulletArray.splice(i, 1);
    // }
    
  }
  
}

function keyPressed(){
  let pro = new Bullet(0, random(height), bulletImg);
  bulletArray.push(pro);
}
