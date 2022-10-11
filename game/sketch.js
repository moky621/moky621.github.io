// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x = 100;
let y = 100;
let charSpeed = 4;
let img, img1, img2, wasted;
let bg;
let laserx = 1500;
let someTime = 0;
let shoot = "on";
let lasery;
let hit, cash;
let state = "real";
let moneyX, moneyY;
let moneyState = "good";
let sound;

function preload(){
  bg = loadImage("gotham.jpg"); 
  sound = loadSound("wastedsound.mp3");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage("robber.png");
  img1 = loadImage("laser.png");
  img2 = loadImage("money.png");
  wasted = loadImage("wasted.png");
}



function draw() {
  if (state === "real"){
    background(220);
    back();
    robber();
    keyTyped();
    money();
    beam();
    laser();
    detectHit();
    moneyGrab();
  }
  if (state === "dead"){
    end();
  }
}
function back(){
  imageMode(CENTER);
  imageMode(back);
  image(bg, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
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
  let hit = collideRectRect(x, y, 100, 75, laserx, lasery, 200, 100);
  if (!hit){
    state = "real";
  }
  else{
    state = "dead";
  }
}

function moneyGrab(){
  let cash = collideRectRect(x, y, 100, 75, moneyX, moneyY, 100, 50);
  if (cash){
    moneyX = random(0, 1000);
    moneyY = random(0, 800);
  }
}
function money(){
  moneyX = width/2;
  moneyY = height/2;
  image(img2, moneyX, moneyY, 100, 50);
}
      
function laser(){
  image(img1, laserx, lasery, 200, 100);
  laserx -= 30;
  if (laserx < -100){
    laserx = 1500;
    lasery = random(0, 800);
  }
}

function end(){
  image(wasted, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  sound.play();

}

function mousePressed(){
  x = mouseX;
  y = mouseY;
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
