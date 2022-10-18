// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theCircles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  displayCircles();
}

function displayCircles(){
  for (let i=0; i < theCircles.length; i++){
    noStroke();
    fill(theCircles[i].theColor);
    circle(theCircles[i].x, theCircles[i].y, theCircles[i].radius);
  }
}
function mousePressed() {
  spawnCircle();
}
function spawnCircle() {
  let thisCircle = {
    x: mouseX,
    y: mouseY,
    radius: random(25, 100),
    theColor: color(random(255), random(255), random(255), random(255)),
  };
  theCircles.push(thisCircle);

}
