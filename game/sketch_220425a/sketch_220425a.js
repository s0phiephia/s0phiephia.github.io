



var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var img1, img2;


function preload(){
  img1 = loadImage('https://s0phiephia.github.io/game/triceratop.png');
  img2 = loadImage('https://s0phiephia.github.io/game/mountains.jpg');
}

function setup() {
  createCanvas(600,600);
  textAlign(CENTER);
  textSize(20);
} // end of setup

function draw() {
  background(img2);
  
  levelOne();
  text(("Score: " + score), width/2, 40);
  
} // end of draw

function levelOne(){
  text("level 1", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  
  line(ballx, bally, mouseX, mouseY);
  
  image(img1, ballx, bally, ballSize, ballSize);
  
  //ellipse(ballx, bally, ballSize, ballSize);
  
} // end of level 1
