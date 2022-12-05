// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let counter = 0;
let highScore = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (getItem("highscore") !== null){
    highScore = getItem("highscore");
  }
  else {
    storeItem("highscore", 0);
  }
}

function draw() {
  background(220);
  
  fill("black")
  textSize(100);
  text(counter, width/2, height/2);

  fill("red")
  text(highScore, width/2, 200);
}

function mousePressed() {
  counter++;

  if (counter > getItem("highscore")) {
    storeItem("highscore", counter);
    highScore = counter;
  }
}
