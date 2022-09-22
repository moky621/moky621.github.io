// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let fishImage;

function preload(){
  fishImage = loadImage("robber.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  imageMode(CENTER);
}

function draw() {
  background(220);
  image(fishImage, mouseX, mouseY)
}
