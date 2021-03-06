
var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var img1, img2, img3, img4, img5, img6;
var gameState = "begin";

function preload(){
  img1 = loadImage('https://s0phiephia.github.io/game/triceratop.png');
  img2 = loadImage('https://s0phiephia.github.io/game/mountains.jpg');
  img3 = loadImage('https://s0phiephia.github.io/game/desert.jpeg');
  img4 = loadImage('https://s0phiephia.github.io/game/pretty.jpg');
  img5 = loadImage('https://s0phiephia.github.io/game/start.png');
  img6 = loadImage('https://s0phiephia.github.io/game/end.jpg'); 
}

function setup() {
  createCanvas(600,600);
  textAlign(CENTER);
  textSize(20);
} // end of setup

function draw() {
 
  if(gameState == "begin"){
  background(img5);
  levelBegin();
  }
  
  if(gameState == "L1"){
  background(img2);
  levelOne();
  }
  
  if(gameState == "L2"){
  background(img3);
  levelTwo();
  }
  
  if(gameState == "L3"){
  background(img4);
  levelThree();
  }
  
  if(gameState == "win"){
  background(img6);
  levelWin();
  }
  
  text(("Score: " + score), width/2, 40);
  
  
} // end of draw

function levelBegin(){
 text("Start", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width - 5);
    bally = random(height - 5);
    score = score + 1;
  }
  
  if(score>= 1){
    gameState = "L1";
  }
  
  image(img1, ballx, bally, ballSize, ballSize);
  line(ballx + 20 , bally + 20 , mouseX, mouseY);
  }

function levelOne(){
  text("level 1", width/2, height-20);
  var distToBall = dist(ballx + 20, bally + 20, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width - 5);
    bally = random(height - 5);
    score = score + 1;
  }
  
  if(score>= 10){
    gameState = "L2";
  }
  image(img1, ballx, bally, ballSize, ballSize);
  line(ballx + 20 , bally + 20 , mouseX, mouseY);
  //ellipse(ballx, bally, ballSize, ballSize);
  
} // end of level 1


function levelTwo(){
  text("level 2", width/2, height-20);
  var distToBall = dist(ballx + 20, bally + 20, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width - 5);
    bally = random(height - 5);
    score = score + 1;
  }
  line(ballx + 20 , bally + 20 , mouseX, mouseY);
  image(img1, ballx, bally, ballSize, ballSize);
    
    if(score>= 20){
      gameState = "L3"
    }
} //end level 2

function levelThree(){
  text("level 3", width/2, height-20);
  var distToBall = dist(ballx + 20, bally + 20, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width - 5);
    bally = random(height - 5);
    score = score + 1;
    ballSize = ballSize - 1;
  }
 image(img1, ballx, bally, ballSize, ballSize);
 
 if(score>= 50){
      gameState = "win"
 }
 
} //end level 3

function levelWin(){
  text("Game Over", width/2, height-20);
  
} //end win
