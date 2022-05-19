var img, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20;
var initials ='SK'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account

  //og 1
  img = loadImage('https://s0phiephia.github.io/dinosaur.png');
  //og 2
  img2 = loadImage('https://s0phiephia.github.io/dinosaur2.png');
  
  //pink
  img3 = loadImage('https://s0phiephia.github.io/dinosaur4.png');
  //orange
  img4 = loadImage('https://s0phiephia.github.io/dinosaur5.png');
  //yellow
  img5 = loadImage('https://s0phiephia.github.io/dinosaur6.png');
  //green
  img6 = loadImage('https://s0phiephia.github.io/dinosaur7.png');
  //blue
  img7 = loadImage('https://s0phiephia.github.io/dinosaur3.png');
  //purple
  img8 = loadImage('https://s0phiephia.github.io/dinosaur8.png');
  
  
  //meteor
  img9 = loadImage('https://s0phiephia.github.io/meteor.png');
  //grass
  img10 = loadImage('https://s0phiephia.github.io/grass.png');
  //tree
  img11 = loadImage('https://s0phiephia.github.io/tree.png');
  //tree2
  img15 = loadImage('https://s0phiephia.github.io/tree2.png'); 
  //cloud
  img12 = loadImage('https://s0phiephia.github.io/cloud.png');
  //cloud2
  img16 = loadImage('https://s0phiephia.github.io/cloud2.png'); 
  //sun
  img13 = loadImage('https://s0phiephia.github.io/sun.png');
  //heart
  img14 = loadImage('https://s0phiephia.github.io/heart.png');
  //volcano
  img17 = loadImage('https://s0phiephia.github.io/volcano.png');
  
  //fire
  img18 = loadImage('https://s0phiephia.github.io/fire.png');
}


function setup() {
createCanvas(1440, 700);  // canvas size
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

//Thin black line
 if (toolChoice == '1' ) {  // first tool
   
    strokeWeight(1);
    stroke(01);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
//Med black line
  } else if (toolChoice == '2') { // second tool

    strokeWeight(3);
    stroke(01);
    line(mouseX, mouseY, pmouseX, pmouseY);

//Thick black line
  } else if (toolChoice == '3') { // third tool
    
    strokeWeight(5);
    stroke(01);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
//Thin eraser
  } else if (toolChoice == '4') {

    strokeWeight(5);
    stroke(screenbg);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
//Med eraser
  } else if (key == '5') { // this tool calls a function
    
    strokeWeight(10);
    stroke(screenbg);
    line(mouseX, mouseY, pmouseX, pmouseY);

//Thick eraser
  } else if (toolChoice == '6') {

    strokeWeight(20);
    stroke(screenbg);
    line(mouseX, mouseY, pmouseX, pmouseY);

//thick Blue pen
  } else if (key == '7') { // this tool calls a function
    
    strokeWeight(30);
    stroke(158, 233, 247);
    line(mouseX, mouseY, pmouseX, pmouseY);

//Thick red pen
 } else if (key == '8') { // this tool calls a function
    
    strokeWeight(30);
    stroke(255, 4, 0);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
//Thick purple pen
 } else if (key == '9') { // this tool calls a function
    
    strokeWeight(30);
    stroke(215, 159, 237);
    line(mouseX, mouseY, pmouseX, pmouseY);

//Thick green pen
 } else if (key == '0') { // this tool calls a function
    
    strokeWeight(30);
    stroke(142, 222, 157);
    line(mouseX, mouseY, pmouseX, pmouseY);

//og Dinosaur 1 
  } else if (toolChoice == 'q' || toolChoice == 'Q') {
    image(img, mouseX - 145, mouseY - 75, 230, 150);

//og Dinosaur 2
  } else if (toolChoice == 'w' || toolChoice == 'W') { 
    image(img2, mouseX - 100, mouseY - 80, 200, 150);
    
//Pink dinosaur
  } else if (toolChoice == 'e' || toolChoice == 'E') { 
    image(img3, mouseX - 55, mouseY - 60, 100, 130);

//Orange dinosaur
  } else if (toolChoice == 'r' || toolChoice == 'R') { 
    image(img4, mouseX - 55, mouseY - 65, 100, 130);
    
//Yellow dinosaur
  } else if (toolChoice == 't' || toolChoice == 'T') { 
    image(img5, mouseX - 80, mouseY - 75, 150, 120);
    
//Green dinosaur
  } else if (toolChoice == 'y' || toolChoice == 'Y') { 
    image(img6, mouseX - 70, mouseY - 135, 175, 175);
  
//Blue dinosaur
  } else if (toolChoice == 'u' || toolChoice == 'U') { 
    image(img7, mouseX - 70, mouseY - 110);

//Purple dinosaur
} else if (toolChoice == 'i' || toolChoice == 'I') { 
    image(img8, mouseX - 120, mouseY - 90);


//fire
} else if (toolChoice == 'o' || toolChoice == 'O') { 
    image(img18, mouseX - 25, mouseY - 25, 55, 55);


//meteor
} else if (toolChoice == 'a' || toolChoice == 'A') { 
    image(img9, mouseX - 160, mouseY - 180, 230, 250);
//grass
} else if (toolChoice == 's' || toolChoice == 'S') { 
    image(img10, mouseX - 68, mouseY - 68);
//tree 1
} else if (toolChoice == 'd' || toolChoice == 'D') { 
    image(img11, mouseX - 100, mouseY - 200);
//tree 2
} else if (toolChoice == 'f' || toolChoice == 'F') { 
    image(img15, mouseX - 90, mouseY - 140, 170, 250);
//clouds
} else if (toolChoice == 'g' || toolChoice == 'G') { 
    image(img12, mouseX - 165, mouseY - 80);
//cloud 2
} else if (toolChoice == 'h' || toolChoice == 'H') { 
    image(img16, mouseX - 150, mouseY - 70);
//sun
} else if (toolChoice == 'j' || toolChoice == 'J') { 
    image(img13, mouseX - 160, mouseY - 150, 325, 300);
//heart
} else if (toolChoice == 'k' || toolChoice == 'K') { 
    image(img14, mouseX - 20, mouseY - 20);
//volcano
} else if (toolChoice == 'l' || toolChoice == 'L') { 
    image(img17, mouseX - 170, mouseY - 150, 340, 300);
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
