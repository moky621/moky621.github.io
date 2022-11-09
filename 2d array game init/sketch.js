// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const ROWS = 10;
const COLS = 20;
let grid;
let cellWidth;
let cellHeight;
let playerX = 0;
let playerY = 0;
let character, power;
let stoneX = 0;
let stoneY = 0;
let state = "normal";
let gamemode, level1;
let stone1X = 0;
let stone1Y = 0;
let reality;
let variab;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/COLS;
  cellHeight = height/ROWS;
  grid = create2dArray(COLS, ROWS);
  character = loadImage("thanos.png");
  power = loadImage("power.jpg");
  reality = loadImage("reality.jpg");
  //place player in grid
  grid[playerY][playerX] = 9;
  grid[stoneY][stoneX] = 8;
  grid[stone1Y][stone1X] = 7;
  gamemode = loadJSON("gamemode.json")
  level1 = loadJSON("level1.json");
  grid = gamemode;
  
}

function draw() {
  background(220);
  displayGrid(grid);
  // spawnGems();
  // pickup();
  
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


function displayGrid(grid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      if (grid[y][x] === 0) {
        fill("black");
        stroke("blue");
        rect( x*cellWidth, y*cellHeight, cellWidth, cellHeight );
      }
      else if (grid[y][x] === 1) {
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 9) {
        fill("blue");
        
        image(character, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 8) {
        image(power, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      
      else if (grid[y][x] === 7) {
        image(reality, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
    }
  }
}

function mousePressed(){
  let xPos = Math.floor(mouseX/cellWidth);
  let yPos = Math.floor(mouseY/cellHeight);

  if (grid[yPos][xPos] === 0) {
    grid[yPos][xPos] = 8;
  }
  else if (grid[yPos][xPos] === 8) {
    grid[yPos][xPos] = 0;
  }
  
}

// function speedBoost() {
//   if (state === "speed") {
//     function keyPressed(){
//       if (grid[playerY][playerX + 1] === 0) {
//         if (key === 'd') {
//         // reset old loaction to white
//           grid[playerY][playerX] = 0;
//           //move
//           for (let i=0; i<width/ROWS; i++) {
//             if (i % millis() > 5) {
//               playerX++;
//               i = i+100;
    
//             }
    
//           }
//   }
// }
//     }
//   }


function spawnGems(){
  if (i % millis() > 5) {
    grid[random(0, ROWS)][random(0, COLS)].push(8);
  }
}

function pickup(){
  if (grid[playerY][playerX] === grid[stoneY][stoneX]) {
    grid = gamemode;
  }
}

function keyTyped(){

 
    
  

  if (state === "normal"){
    if (grid[playerY][playerX + 1] === 0) {
      if (key === "d") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        for (let i=0; i<width/ROWS; i++) {
          if (i % millis() > 5) {
            playerX++;
            i = i+1000;

          }

        }
        //new player location
        grid[playerY][playerX] = 9;
      }
    }
    if (grid[playerY][playerX - 1] === 0) {
      if (key === "a") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        for (let i=0; i<width/ROWS; i++) {
          if (i % millis() > 5) {
            playerX--;
            i = i+1000;

          }

        }
        //new player location
        grid[playerY][playerX] = 9;
      }
    }
    if (grid[playerY+1][playerX] === 0) {
      if (key === "s") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        playerY++;
        //new player location
        grid[playerY][playerX] = 9;
      }
    }
    if (grid[playerY-1][playerX] === 0) {
      if (key === "w") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        playerY--;
        //new player location
        grid[playerY][playerX] = 9;
      }
    }
  }

  if (state === "speed"){
    if (grid[playerY][playerX + 1] === 0) {
      if (key === "d") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        for (let i=0; i<width/ROWS; i++) {
          if (i % millis() > 5) {
            playerX++;
            i = i+100;
          }
        }
        grid[playerY][playerX] = 9;
      }
    }  
    
    if (grid[playerY][playerX - 1] === 0) {
      if (key === "a") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        for (let i=0; i<width/ROWS; i++) {
          if (i % millis() > 5) {
            playerX--;
            i = i+100;
          }
        }
        grid[playerY][playerX] = 9;
      }
    } 
    
    if (grid[playerY+1][playerX] === 0) {
      if (key === "s") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        for (let i=0; i<width/ROWS; i++) {
          if (i % millis() > 5) {
            playerY++;
            i = i+100;
          }
        }
        grid[playerY][playerX] = 9;
      }
    }
    
    if (grid[playerY-1][playerX] === 0) {
      if (key === "w") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        for (let i=0; i<width/ROWS; i++) {
          if (i % millis() > 5) {
            playerY--;
            i = i+100;
          }
        }
        grid[playerY][playerX] = 9;
      }
    }
  }

  if (state === "maze") {
    if (grid[playerY][playerX + 1] === 0) {
      if (key === "d") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        for (let i=0; i<width/ROWS; i++) {
          if (i % millis() > 5) {
            playerX++;
            i = i+1000;

          }

        }
        //new player location
        grid[playerY][playerX] = 9;
      }
    }
    if (grid[playerY][playerX - 1] === 0) {
      if (key === "a") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        for (let i=0; i<width/ROWS; i++) {
          if (i % millis() > 5) {
            playerX--;
            i = i+1000;

          }

        }
        //new player location
        grid[playerY][playerX] = 9;
      }
    }
    if (grid[playerY+1][playerX] === 0) {
      if (key === "s") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        playerY++;
        //new player location
        grid[playerY][playerX] = 9;
      }
    }
    if (grid[playerY-1][playerX] === 0) {
      if (key === "w") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        playerY--;
        //new player location
        grid[playerY][playerX] = 9;
      }
    }
  }

  
  
  if (key === "1") {
    grid = level1;
    state = "maze";
    if (grid[playerY+1][playerX] === 7) {
      if (key === "s") {
        alert("you win!");
      }
      
    }
  }

    
    
  // if (grid[playerY][playerX+1] === 8 || grid[playerY][playerX+1] === 7 ) {
  //   if (key === "d") {
  //     // reset old loaction to white
  //     grid[playerY][playerX] = 0;
  //     //move
  //     playerX++;
  //     //new player location
  //     grid[playerY][playerX] = 9;
  //   }
  // }

  if (state === "normal" || state === "speed"){
    if (grid[playerY][playerX-1] === 8 || grid[playerY][playerX-1] === 7 ) {
      if (key === "a") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        playerX--;
        //new player location
        grid[playerY][playerX] = 9;
      }
    }

    if (grid[playerY][playerX+1] === 8 || grid[playerY][playerX+1] === 7 ) {
      if (key === "d") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        playerX++;
        //new player location
        grid[playerY][playerX] = 9;
      }
    }

  

    // gem stone pickup
    if (grid[playerY+1][playerX] === 8 || grid[playerY+1][playerX] === 7 ) {
      if (key === "s") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        playerY++;
        //new player location
        grid[playerY][playerX] = 9;
      }
    }

  

    if (grid[playerY-1][playerX] === 8 || grid[playerY-1][playerX] === 7 ) {
      if (key === "w") {
        // reset old loaction to white
        grid[playerY][playerX] = 0;
        //move
        playerY--;
        //new player location
        grid[playerY][playerX] = 9;
      }
    }
  }

  if (key === "g") {
    grid = gamemode;
    state = "normal";
  }
  
}