// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Button{
  constructor(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color(255, 0, 0, 190);

  }

  display() {
    rect(this.x, this.y, this.width, this.height);
    fill(this.color);
  }

  isInside(x, y){

  }
  
}

let newArray = [];
// let newBox = new Button(100, 100/2, 300, 100);
let box1;
// newArray.push(box1);

function setup() {
  createCanvas(windowWidth, windowHeight);
  box1 = new Button(width/2, height/2, 300, 100);
}


function draw() {
  background(220);
  // newArray[0].display();
  box1.display();
}

function mousePressed() {
  if (mouseX > width/2 && mouseX < width/2 + 300 && mouseY > height/2 && mouseY < height/2 + 100) {
    newArray.push(newBox);
  }
}
