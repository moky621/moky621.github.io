// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let j = 200;
let k = 200;
let x = 1600;
let y = 800;
let charSpeed = 4;
let img;

function setup() {
  createCanvas(x, y);
  img = loadImage("robber.png");

}

function draw() {
  background(220);
  robber();
  keyTyped();
}
 

function robber(){
  image(img, j, k);
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
