// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x = 100;
let y = 100;
let charSpeed = 4;
let img, img1, img2;
let laserx = 1500;
let someTime = 2000;
let shoot = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage("robber.png");
  img1 = loadImage("laser.png");
  img2 = loadImage("money.png");
}

function draw() {
  background(220);
  robber();
  keyTyped();
  laser();
  money();
  idk();
}

function idk() {
  if (shoot) {
    let lasery = 500;
    image(img1, laserx, lasery, -200, -100);
    laserx -= 5;
    if (millis() > someTime) {
      shoot = !shoot;
      someTime = millis() + 2000;
    }
  }
}

function robber(){
  image(img, x, y, 300, 200);
}

function money(){
  let x = width/2;
  let y = height/2;
  image(img2, x, y, 100, 50);
}

function laser(){
  let lasery = 500;
  image(img1, laserx, lasery, 200, 100);
  laserx -= 5;
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
