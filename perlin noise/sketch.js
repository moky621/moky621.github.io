// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let allCircles = [];


function keyPressed{
  let theBall {
    x: random(width),
    y: random(height),
    radius: random(50, 100),
    time: random(5000),
  };
  allCircles.push(theBall);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fill("black");

  for (let i =0; i < allCircles.length; i++){
    allCircles[i].x = noise(allCircles[i].time) * width;
    allCircles[i].y = noise(allCircles[i].time + 5000);
    
    allCircles
    // x = noise(time) * width;
    // y = noise(time+5) * height;

    // time += 0.01;
    // circle(x, y, radius*2);
    }
}
