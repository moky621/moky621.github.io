// walker oop demo

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = "red";
    this.speed = 5;
    this.radius = 2;
  }

  display() {
    fill(this.color);
    circle(this.x, this.y, this.radius*2);
  }

  move() {
    let choice = random(100);
    if (choice < 25) {
      this.y -= this.speed;
    }
    else if (choice < 50){
      this.y+= this.speed;      
    }
    else if (choice < 75) {
      this.x -= this.speed;
    }
    else if (choice < 100){
      this.x += this.speed;      
    }
  }

}

let michael;
let katherine;

function setup() {
  createCanvas(windowWidth, windowHeight);
  michael = new Walker(windowWidth/2, windowHeight/2);
  katherine = new Walker(600, 300);
  katherine.color = "blue";
}

function draw() {
  michael.display();
  michael.move();
  katherine.display();
  katherine.move();

}
