// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x = 200;
let y = 200;
let charSpeed = 1;

function setup() {
  createCanvas(1600, 800);
}

function draw() {
  background(220);
  robber();
  keyTyped();
}

let img = loadImage("robber.png"); 

function robber(){
  image(img, x, y, 200, 200);
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
