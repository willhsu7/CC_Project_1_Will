var b = 0;
var c = -600;
var speed = 10;
var gravity = 0.1;
var donuts = [];
var candy = [];

function setup() {
  createCanvas(700, 600);
  background(60, 61, 163);
  for (var i = 0; i < 50; i++) {
    donuts[i] = new Donuts();
  }
  for (var i = 0; i < 20; i++) {
    candy[i] = new Candy();
  }
}

function draw() {
  background(60, 61, 163);

  for (var x = 100; x <= height; x += 200) {
    OrangeCircle(x, b, 100);
  } // three orange circles

  b = b + speed;
  speed = speed + gravity;

  /*if (b > height) {
    speed = speed * -0.95;
    b = height; // let the orange circles fall and bounce with gravity 
  }*/

  for (var i = 0; i < donuts.length; i++) {
    donuts[i].display();
  }

  for (var i = 0; i < candy.length; i++) {
    candy[i].display();
  }

  for (var m = 150; m <= height; m += 150) {
    CircleTwo(m, c, 80);
  }

  /*if (c > height) {
    speed = -3;
  }*/
  if (c < 0) {
    speed = 2
  }
  c = c + speed;
  //bouncing circle two 

}

function OrangeCircle(x, y, d) {

  noFill();
  strokeWeight(2);
  stroke(245, 166, 35);
  //stroke(random(245), 0, random(245));
  for (var d; d > 0; d -= 10) {
    ellipse(x, y, d, d);
  }
}

function CircleTwo(m, n, d) {

  noFill();
  strokeWeight(3);
  stroke(255, 120, 37);
  for (var d; d > 0; d -= 10) {
    ellipse(m, n, d, d);
  }
}

function Donuts() {
  this.x = random(0, width);
  this.y = random(0, height);

  this.display = function() {
    stroke(255, 197, 139);
    strokeWeight(5);
    fill(0, random(255), random(255));
    ellipse(this.x, this.y, 30, 30)
  }

}

function Candy() {
  this.x = random(0, width);
  this.y = random(0, height);

  this.display = function() {
    fill(random(255), 0, random(255));
    noStroke;
    rect(this.x, this.y, 24, 36);
  }

}