



var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var img1, img2;


function preload(){
  img1 = loadimg(

function setup() {
  createCanvas(600,600);
  textAlign(CENTER);
  textSize(20);
} // end of setup

function draw() {
  background(220);
  
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
  
  if(score > 5){
    background(random(255));}
  
  line(ballx, bally, mouseX, mouseY);
  
  ellipse(ballx, bally, ballSize, ballSize);
  
} // end of level 1
