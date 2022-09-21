// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x = 100;
let y = 100;
let charSpeed = 4;
let img;
let img1;

function setup() {
  createCanvas(1600, 1000);
  img = loadImage("robber.png");
  img1 = loadImage("laser.png");
}

function draw() {
  background(220);
  robber();
  keyTyped();
  laser();
}
 

function robber(){
  image(img, x, y, 300, 200);
}
function laser(){
  image(img1, 100, 100, 200, 100);
}
function keyTyped(){
  if (key === 'w'){
    y -= charSpeed;
  }
  if (key === 's'){
    y += charSpeed;
  }
  if (key === 'd'){
    x += charSpeed;
  }
  if (key === 'a'){
    x -= charSpeed;
  }
  
}
