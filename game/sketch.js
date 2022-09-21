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


let x = 200;
let y = 200;
let circleSpeed = 1;

function setup() {
<<<<<<< HEAD
  createCanvas(1600, 800);

=======
  createCanvas(400, 400);
>>>>>>> parent of 2924e75 (new)
}

function draw() {
  background(220);
  drawCircle();
  keyTyped();
}
<<<<<<< HEAD
 

function robber(){
  image(img, j, k);
=======

function drawCircle(){
  fill("red")
  circle(x, y, 30)
>>>>>>> parent of 2924e75 (new)
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
