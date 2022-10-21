// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theHeights = [];
let startingLocation = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
 theHeights = generateHeights(99900999);
}

function draw() {
  background(220);
  for (let i = startingLocation; i < startingLocation + width; i++){
    displayRectangle(i-startingLocation, theHeights[i], 1);
  }
  if (keyIsPressed){
    startingLocation+=99999;
  }
}

function displayRectangle(x, rectHeight, rectWidth){
  let y = height - rectHeight;
  rect(x, y, rectWidth, rectHeight);
}

function generateHeights(howMany){
  let tempArray = [];
  let time = random(10000);
  for (let i = 0; i < howMany; i++) {
    tempArray.push(noise(time) * height);
    time += 0.001;
  }
  return tempArray;
}