//oop intro
class Dog {
  constructor(name) {
    this.name = name;
    this.age = 0;
  }

  bark() {
    console.log("Woof! says " + this.name);
  }
}

let myDog = new Dog("rich");
let yourDog = new Dog("draco");



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
}
