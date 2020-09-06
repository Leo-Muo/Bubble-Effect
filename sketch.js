function setup() {
  createCanvas(600, 300);
  frameRate(60);
  bubble.push(new Bubble());
}

function draw() {
  background(0);
  for (let i = 0; i < bubble.length; i++) {
    bubble[i].show();
    bubble[i].move();
  }
}
