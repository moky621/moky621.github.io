// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x = 200;
let y = 200;
let circleSpeed = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawCircle();
  keyTyped();
}

function drawCircle(){
  fill("red")
  circle(x, y, 30)
}

function keyTyped(){
  if (key === 'w'){
    y -= circleSpeed;
  }
  if (key === 's'){
    y += circleSpeed;
  }
  if (key === 'd'){
    x += circleSpeed;
  }
  if (key === 'a'){
    x -= circleSpeed;
  }
  
}
