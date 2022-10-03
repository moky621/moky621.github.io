//start scfreen ndemo


let state = "start";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if (state === "start") {
    startScreen();
  }
}

function mousePressed() {
  if (state === "start" && mouseInsideRect(400, 700, 400, 550)){
    state = "main";
  }
}

function startScreen() {
  if (mouseInsideRect(400, 700, 400, 550)){
    fill("blue");
  }
  else{
    fill("black");
    rect(400, 400, 300, 150);
  }
}

function mouseInsideRect(left, right, top, bottom){
  return mouseX>= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}