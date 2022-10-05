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
let someTime = 0;
let shoot = "on";
let lasery;
let hit;
let state = "real";

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage("robber.png");
  img1 = loadImage("laser.png");
  img2 = loadImage("money.png");
}


function draw() {
  if (state === "real"){
    background(220);
    robber();
    keyTyped();
    money();
    beam();
    laser();
    // detectHit();
  }
}



function beam() {
  if (millis() >= 2000+someTime) {
    laser();
    someTime = millis();
  
  }
}

// function idk() {
//   if (shoot === "on") {
//     lasery = random(0, 800);
//     image(img1, laserx, lasery, 200, 100);
//     laserx -= 5;
//     else if (millis() >= 1000+someTime) {
//       shoot = !shoot;
//       someTime = millis();
//     }
//   }
// }

function robber(){
  image(img, x, y, 300, 200);
}

function detectHit(){

  hit = collideRectRect(x, y, 300, 200, laserx, lasery, 200, 100);
  if (hit){
    state = "dead";
  }
}
function money(){
  let x = width/2;
  let y = height/2;
  image(img2, x, y, 100, 50);
}

function laser(){
  image(img1, laserx, lasery, 200, 100);
  laserx -= 10;
  if (laserx < -100){
    laserx = 1500;
    lasery = random(0, 800);
  }


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
