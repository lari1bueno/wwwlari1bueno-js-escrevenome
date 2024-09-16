function setup() {
  createCanvas(600, 600);
  background("rgb(252, 219, 248)");
}

function draw() {
  stroke("rgb(202, 55, 186)")
fill("rgb(220, 163, 236)")
  
  // console.log(mouseIsPressed)
  
  if(mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
