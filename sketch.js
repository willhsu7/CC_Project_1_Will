var b = 0;
var c = -600;
var speed = 10;
var gravity = 0.1;
var donuts = [];
var tileCount = 10;

function setup() {
  createCanvas(800, 700);
  background(0, 21, 79);

  for (var i = 0; i < 70; i++) {
    donuts[i] = new donut();
  } //set up how many little shining circles in the background 
}

function draw() {
  background(0, 21, 79);
  star(mouseX, mouseY, 30, 70, 5);

  if (mouseIsPressed) {
    background(0, 0, 0); //change background color by pressing the mouse 
    speed = 0; //everything's stop by pressing the mouse
    star(mouseX, mouseY, 30, 70, 5);
  }

  translate(width / tileCount / 2, height / tileCount / 2);
  strokeWeight(mouseY / 50);
  stroke(209, 218, 240);
  fill(131, 137, 150);

  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {

      var posX = width / tileCount * gridX;
      var posY = height / tileCount * gridY;

      var shiftX = random(-mouseX, mouseX) / 20;
      var shiftY = random(-mouseY, mouseY) / 20;

      rect(posX + shiftX, posY + shiftY, mouseX / 15, mouseY / 15);
    }
  }

  for (var i = 0; i < donuts.length; i++) {
    donuts[i].display();
    donuts[i].move();
  } //little shining circles in the background random

  for (var x = 100; x <= height; x += 200) {
    circleone(x, b, 100);
  } // circle one dropping 

  b = b + speed;
  speed = speed + gravity;

  if (b > height) {
    b = -300;
  } // let circle one come again

  for (var m = 150; m <= height; m += 150) {
    circletwo(m, c, 80); // second round for circles dropping 
  }

  if (c < 0) {
    speed = 2
  }
  c = c + speed;

  if (c > height) {
    c = -900;
  }

}

function circleone(x, y, d) {
  noFill();
  strokeWeight(2);
  stroke(85, 142, 212);
  if (mouseIsPressed) {
    stroke(random(255), 0, 0);
  }
  for (var d; d > 0; d -= 10) {
    ellipse(x, y, d, d);
  }

}

function circletwo(m, n, d) {

  noFill();
  strokeWeight(3);
  stroke(22, 113, 224);
  if (mouseIsPressed) {
    stroke(random(255), 0, 0);
  }
  for (var d; d > 0; d -= 10) {
    ellipse(m, n, d, d);
  }
}

function donut() {
  this.x = random(0, width);
  this.y = random(0, height);

  this.display = function() {
    stroke(255);
    strokeWeight(5);
    fill(0, 0, random(255));
    ellipse(this.x, this.y, 30, 30)

    if (mouseIsPressed) {
      stroke(255);
      strokeWeight(5);
      fill(random(255), 0, 0);
      ellipse(this.x, this.y, 60, 60)
    }

  }

  this.move = function() {
    this.x = this.x + speed;
    this.y = this.y + speed;

    if (this.x > width && this.y > height) {
      this.x = random(0, width);
      this.y = random(0, height);
      speed = 3;
    }
  }
}


function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle / 2.0;

  beginShape();
  fill(255, 84, 13);
  if (mouseIsPressed) {
    fill(random(255), 0, 0);
  }
  stroke(255, 190, 0);
  strokeWeight(10);
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);

  }
  endShape(CLOSE);
}