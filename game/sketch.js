// Crazy Escape
// Abde Etagiuri 
// October 13, 2022
//
// Extra for Experts:
// added sound and end screen

/// CONTROLS ///
// WASD TO MOVE, PRESS 'B' TO SPAWN BATMAN,//
// for two players, use mouse click to control lasers//


// global variables

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
let music;
let x1 = x;
let y1 = y;
let batman;
let batmanx = 1500;

// preload sound and background pic
function preload(){
  bg = loadImage("gotham.jpg"); 
  sound = loadSound("wastedsound.mp3");
  // music = loadSound("panther.mp3");
}

// canvas setup and loading images
function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage("robber.png");
  img1 = loadImage("laser.png");
  img2 = loadImage("money.png");
  wasted = loadImage("wasted.png");
  batman = loadImage("batman.png");
  moneyX = random(400, 800);
  moneyY = random(200, 300);
}

// draw loop
function draw() {
  if (state === "real"){
    background(220);
    back();
    robber();
    keyTyped();
    beam();
    laser();
    moneyGrab();
    money();
    detectHit();
    keyPressed();
  }
  if (state === "dead"){
    end();
    
  }
}
// background picture
function back(){
  imageMode(CENTER);
  imageMode(back);
  image(bg, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
}

// function bgMusic(){
//   music.play();
//   noLoop();
// }

// laser respawn
function beam() {
  if (millis() >= 2000+someTime) {
    laser();
    someTime = millis();
    
  }
}
// robber spawn      
function robber(){
  image(img, x, y, 300, 200);
}

// collision for robber and laser
function detectHit(){ 
  let hit = collideRectRect(x, y, 100, 75, laserx, lasery, 200, 100);
  if (!hit){
    state = "real";
  }
  else{
    state = "dead";
  }
}

// grab money
function moneyGrab(){
  let cash = collideRectRect(x, y, 100, 75, moneyX, moneyY, 100, 100);
  if (cash){
    moneyX = random(100, windowWidth);
    moneyY = random(100, windowHeight);
    
  }
}

// spawn money
function money(){
  image(img2, moneyX, moneyY, 100, 50);
}

// spawn laser
function laser(){
  image(img1, laserx, lasery, 200, 100);
  laserx -= 25;
  if (laserx < -100){
    laserx = 1500;
    lasery = random(0, 800);
  }
}

// wasted screen
function end(){
  image(wasted, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  sound.play();
  noLoop();
}

// player 2 laser control
function mousePressed(){
  laserx = 1500;
  lasery = mouseY;
}


// robber WASD controls
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

function bat(){
  image(batman, batmanx, height/2, 500, 900);
  batmanx --;
}

function keyPressed(){
  if (keyCode === 66){
    bat();
  }
}

// function mouseInsideRect(left, right, top, bottom) {
//   return mouseX >= left && mouseX <= right &&
//          mouseY >= top && mouseY <= bottom;

// function tryAgain(){
//   if state === "dead":
//     if (mouseInsideRect(600, 250, width/2, height/2)){
//       state = "real";
//   }
// }

// function mouseIsPressed() {
//   if (state === "real" && mouseInsideRect(400, 700, 400, 550)) {
//     state = "dead";
//   } 
// }