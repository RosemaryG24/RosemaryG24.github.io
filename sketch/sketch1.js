function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  //draw headshapw
  fill('blue')
 ellipse(200,200,300,400)

  //eye and eye color
  fill("white");
  circle(150, 170, 40);
  circle (250, 170, 40);

  //smile
  noFill();
  strokeWeight(3);
  arc(200,230,80,50,0, PI)
  
  line(130,120,270,120)
  
  
  
  fill(0, 0, 0);
  ellipse(650, 100, 200, 50);

  stroke(255, 255, 0);
  line(500, 0, 500, 800);
  
  stroke(255, 0, 255);
  line(0, 400, 800, 400);
  
  stroke(0, 0, 0);
}





