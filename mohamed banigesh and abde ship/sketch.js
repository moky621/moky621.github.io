// OOP Pair Programming Starter Code
// Your Names
// The Date


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage;

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width/2, height/2, shipImage);
}

function draw() {
  background("black");
  enterprise.update();
  enterprise.display();
}

function keyPressed() {
  enterprise.handleKeyPress();
}

// ------------------------------------------------------------------------- //
// Start editing here!

let bulletArray = [];

class Ship {
  constructor(x, y, theImage) {
    this.x = x;
    this.y = y;
    this.theImage = theImage;
    this.dx = 5;
    this.dy = 5;
  }

  update() {
    if (keyIsDown(87)) {
      this.y -= this.dy;
    }
    if (keyIsDown(83)) {
      this.y += this.dy;
    }
    if (keyIsDown(68)) {
      this.x += this.dx;
    }
    if (keyIsDown(65)) {
      this.x -= this.dx;
    }

    for (let i=bulletArray.length-1; i > 0; i--){
      bulletArray[i].update();
      bulletArray[i].display();
      if (bulletArray[i].isOffScreen()){
        bulletArray.splice(i, 1);
      }
    }

    
  }

  display() {
    image(this.theImage, this.x, this.y);
  }

  handleKeyPress() {
    // you only need to use this if you are doing the extra for experts...
    // if you are, you should make a bullet if the space key was pressed
    if (key === ' ') {
      let someBullet = new Bullet(this.x + 38, this.y, 0, -5, bulletImage);
      bulletArray.push(someBullet);
    }

  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dx, dy, theImage) {
    // define the variables needed for the bullet here
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.theImage = theImage;

  }

  update() {
    // what does the bullet need to do during each frame? how do we know if it is off screen?
    this.y += this.dy;
    // if (isOffScreen){

    // }
    
  }

  display() {
    // show the bullet
    image(this.theImage, this.x, this. y);
  }

  isOffScreen() {
    // check if the bullet is still on the screen
    return this.y <= -10;
  }
}

