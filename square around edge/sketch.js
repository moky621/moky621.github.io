// Square Around Edge
// KBanz
// sept 26
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x, y, squareSize, speed, state;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 0;
  y = 0;
  squareSize = 50;
  speed = 10;
  state = "right";
}


function draw() {
  background(220);
  drawSquare();
  move();
}

function drawSquare(){
  rect(x, y, squareSize, squareSize);
}

function move(){
  if (state === "right"){
    x += speed;
    if (x + squareSize >= width){
      x = width - squareSize;
      state = "down";
    }
  
  }
  if (state === "down"){
    y += speed;
    if (y + squareSize >= height){
      y = height - squareSize;
      state = "left";
    }
  
  }
  if (state === "left"){
    x -= speed;
    if (x + squareSize <= width){
      x = width - squareSize;
      state = "up";
    }
  
  }
  if (state === "up"){
    y -= speed;
    if (y + squareSize >= height){
      y = height - squareSize;
      state = "right";
    }
  
  }
}
