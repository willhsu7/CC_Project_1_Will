var tileCount = 10;
var donuts = [];
var speed = 10;

function setup() {
  createCanvas(800, 700);
  background(0, 21, 79);
  for (var i = 0; i < 120; i++) {
    donuts[i] = new donut();
  } //set up how many little shining circles in the background 
}

function draw() {
  background(0, 21, 79);

  // drawing spinning star
  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / -100.0); //let the star spins
  star(0, 0, 30, 70, 5);
  pop();

  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / -20.0);
  star(0, 0, 30, 70, 5);
  pop();

  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 20.0);
  star(0, 0, 30, 70, 7);
  pop();

  //set up the grid movement in the background  
  translate(width / tileCount / 2, height / tileCount / 2);
  noStroke();
  fill(209, 218, 240);

  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {

      var posX = width / tileCount * gridX;
      var posY = height / tileCount * gridY;
      var shiftX = random(-mouseX, mouseX) / 70;
      var shiftY = random(-mouseY, mouseY) / 10;

      ellipse(posX + shiftX, posY + shiftY, mouseX / 30, mouseY / 30);
    }
  } //the grid movement at the background

  for (var i = 0; i < donuts.length; i++) {
    donuts[i].display();
    donuts[i].move();
  } //little shining circles in the background random

}

//custom functions sections 
//star, dount

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle / 2.0;
  beginShape();
  fill(255, 190, 0);
  noStroke();

  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  if (mouseIsPressed) { // if mouse is pressed, the star changes color and size
    fill(0, random(255), random(255));
    scale(1.5);
  }

  endShape(CLOSE);
}

function donut() {
  this.x = random(0, width);
  this.y = random(0, height);

  this.display = function() {
    noStroke();
    fill(0, random(255), random(255));
    ellipse(this.x, this.y, 15, 15);

    if (mouseIsPressed) { //if mouse is pressed, the little circles change color
      noStroke();
      fill(255, 117, random(255));
      ellipse(this.x, this.y, 15, 15);
    }
  }
  
  this.move = function() {
    this.x = this.x + speed;
    this.y = this.y + speed;

    if (this.x > width && this.y > height) { //let it appear after falling down
      this.x = random(0, width);
      this.y = random(0, height);
      speed = 3;
    }
  }
}