// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x = 200;
let y = 200;
let charSpeed = 1;
let img;

function setup() {
  createCanvas(1500, 900);
  img = loadImage("robber.png");

}

function draw() {
  background(220);
  robber();
  keyTyped();
}
 

function robber(){
  image(img, x, y);
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
