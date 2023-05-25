function setup() {
  createCanvas(500, 300);
}

function draw() {
  background(120);
  line(100, 0, 100, 300);
  line(200, 0, 200, 300);
  line(300,0,300,400);
  
  if (mouseX > 0 && mouseX <= 100) {
    fill(0, 0, 255);
    textSize(8);
    text('😂 LMAOOOO', 0,50)
  }
  
  else if (mouseX > 100 && mouseX <= 200) {
    fill(0, 0, 255);
   textSize(18);
    text('😊 hello', 100,100)
  }
  
  else if (mouseX > 200 && mouseX <= 300) {
    fill(0, 255, 0);
    textSize(20);
   text('🤭 goodbye', 200,200)

  }
    else if (mouseX > 300 && mouseX <= 400) {
    fill(0, 100, 0);
    textSize(28);
   text('🤗 goodnight', 290,266)

  }
}







