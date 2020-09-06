let bubble = [];
let bVal = false;

class Bubble {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.xSpeed = random(-1, 5);
    this.ySpeed = random(-1, 5);
    this.diameter = random(20, 40);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }

  update() {}

  show() {
    stroke(this.r, this.g, this.b);
    noFill();
    circle(this.x, this.y, this.diameter);
  }

  move() {
    if (this.x > width || this.x < 0) {
      this.xSpeed *= -1;

      if (bubble.length < 20) bubble.push(new Bubble());
    }
    if (this.y > height || this.y < 0) {
      this.ySpeed *= -1;
      if (bubble.length < 20) bubble.push(new Bubble());
    }
    if (mouseIsPressed) {
      if (this.x > mouseX) {
        this.x -= 5;
      } else if (this.x < mouseX) {
        this.x += 5;
      }
    }

    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
}
