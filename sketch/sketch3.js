

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
   bgImg = loadImage("houseback.webp");
}

function draw() {
  image(bgImg, 0, 0, width, height);



  //The House
  fill('grey');
  stroke('white');
  rect(50,200,220,200);

  //Windows
  fill('yellow');
  strokeWeight(10);
  stroke('brown');
  rect(80,250,50,50);
  rect(180,250,50,50);

  //Triangle
  fill('white');
  triangle(50,200,200,100,270,200);

  //rectangle
  fill('brown');
  rect(140,350,30,50)


  
}