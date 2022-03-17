var img;
var initials ='sk'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('dinosaur.png');
  img2 = loadImage('dinosaur2.png');
  img3 = loadImage('heart.png');
  img4 = loadImage('grass.png');
}

function setup() {
createCanvas(600, 600);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

//Thin Line
 if (toolChoice == '1' ) {  // first tool
   
    stroke(01);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
//Thick Line
  } else if (toolChoice == '2') { // second tool

    stroke(20);
    strokeWeight(4);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
//Small Rectangle Eraser
  } else if (toolChoice == '3') { // third tool

   noStroke();
   fill(screenbg);
   rect(mouseX, mouseY, 10, 5);
    
//Large Rectangle Eraser
  } else if (toolChoice == '4') {

   noStroke();
   fill(screenbg);
   rect(mouseX, mouseY, 60, 40);
  
//Fall Colored Circles
  } else if (key == '5') { // this tool calls a function
  noStroke();
    fill(random(255), random(230), random(0));
    ellipse(mouseX, mouseY, pmouseX, pmouseY);
   
//Bright Colored Circles
  } else if (toolChoice == '6') {
noStroke();
    fill(random(255), random(255), random(255));
    ellipse(mouseX, mouseY, pmouseX, pmouseY);
    
//Dinosaur Tool 1
  } else if (toolChoice == '7') { // places the dinosaur
    image(img, mouseX, mouseY);

//Dinosaur 2 Tool
  }
  else if (toolChoice == '8') { // places the dinosaur 2
    image(img2, mouseX, mouseY);
 

  }  else if (toolChoice == '9') { //places the hearts
    image(img3, mouseX, mouseY);


  } else if (toolChoice == '0') { //places the grass
    image(img4, mouseX, mouseY);
    
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen


  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
    
    
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
