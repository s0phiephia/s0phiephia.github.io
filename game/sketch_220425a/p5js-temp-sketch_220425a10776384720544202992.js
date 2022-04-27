



var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var img1, img2;
var gameState = "L1" ;

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
 
  if(gameState == "L1"){
  background(img2);
  levelOne();
  }
  
  if(gameState == "L2"){
    background(125);
    levelTwo();
  }
  
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
  if(score>= 5){
    gameState = "L2";
  }
  image(img1, ballx, bally, ballSize, ballSize);
  line(ballx + 20 , bally + 20 , mouseX, mouseY);
  //ellipse(ballx, bally, ballSize, ballSize);
  
} // end of level 1


function levelTwo(){
  text("level 2", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  line(ballx + 20 , bally + 20 , mouseX, mouseY);
  image(img1, ballx, bally, ballSize, ballSize);

  
} //end level 2
