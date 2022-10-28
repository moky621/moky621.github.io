// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const ROWS = 40;
const COLS = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}

function create2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLS; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}