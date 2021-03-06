function setup() {
createCanvas(600, 600);
}


function draw() {

noStroke();
background(204);

//clouds
fill(184, 184, 184)
ellipse(10, 100, 400, 300);
ellipse(200, 0, 400, 300);

ellipse(500, 400, 400, 300);
ellipse(650, 300, 300, 300);

//body
fill(138, 124, 124);
ellipse(300, 625, 300, 600);

//back hair
fill(122, 13, 13);
ellipse(300, 175, 225, 225);
ellipse(300, 70, 60, 60);

//left
ellipse(270, 80, 60, 60);
ellipse(240, 90, 60, 60);
ellipse(210, 100, 60, 60);
ellipse(195, 120, 60, 60);
ellipse(190, 150, 60, 60);

ellipse(185, 180, 60, 60);
ellipse(185, 220, 60, 60);
ellipse(190, 250, 60, 60);
ellipse(195, 280, 60, 60);
ellipse(200, 310, 60, 60);

//back left
ellipse(230, 285, 60, 60);
ellipse(270, 285, 60, 60);

//right
ellipse(330, 80, 60, 60);
ellipse(360, 90, 60, 60);
ellipse(390, 100, 60, 60);
ellipse(405, 120, 60, 60);
ellipse(410, 150, 60, 60);

ellipse(415, 180, 60, 60);
ellipse(415, 220, 60, 60);
ellipse(410, 250, 60, 60);
ellipse(405, 280, 60, 60);
ellipse(400, 310, 60, 60);

//back right
ellipse(370, 285, 60, 60);
ellipse(330, 285, 60, 60);

//head
fill(237, 209, 187);//skin color
ellipse(300, 200, 200, 225);

//blush
fill(232, 183, 183)
ellipse (250, 210, 35, 17);
ellipse (357, 210, 35, 17);

//tears
fill(92, 165, 237, 200);
rect(260, 180, 14, 90, 0, 0, 50, 50);
rect(340, 180, 14, 115, 0, 0, 50, 50);

//glasses
strokeWeight(4);
fill(255,255,255,150); // lens color
stroke (171, 3, 3);
rect(235, 160, 50, 40, 5, 5, 20, 20 ); // left lens
stroke(171, 3, 3);
rect(320, 160, 50, 40, 5, 5, 20, 20 ); // right lens
line(285 , 163, 320, 163);
line(285 , 166, 320, 166);
line(285 , 169, 320, 169);
line(235, 160, 210, 150);
line(235, 163, 210, 153);
line(370, 160, 390, 150);
line(370, 163, 390, 153);

strokeWeight(1);
stroke(0,0,0);

//eyes
rect(260, 180, 18, 1);
rect(340, 180, 18, 1);

//Nose
fill(237, 209, 187);
beginShape();
vertex (285, 215);
vertex (280, 220);
vertex (285, 225);
vertex (288, 223);
vertex (290, 223);
vertex (295, 225);

vertex (300, 225);

vertex (305, 225);
vertex (310, 223);
vertex (312, 223);
vertex (315, 225);
vertex (320, 220);
vertex (315, 215);

endShape();

//birthmarks
fill(54, 26, 26);
ellipse (260, 240, 3, 3);
ellipse (260, 250, 1, 1);

// Left eyebrow
beginShape();
vertex (230, 155);
vertex (245, 145);
vertex (285, 145);
vertex (285, 155);
vertex (230, 155);
endShape();

// Right eyebrow
beginShape();
vertex (320, 155);
vertex (320, 145);
vertex (360, 145);
vertex (375, 155);
vertex (320, 155);
endShape();

//mouth
fill(0,0,0);
strokeWeight(4);
line(285, 250, 320, 250);
rect(285, 250, 35, 20, 0, 0, 50, 50);
fill(217, 0, 0);
rect(292, 250, 20, 20, 5, 5, 50, 50);

strokeWeight(1);

//hair

noStroke();

//Left bang
fill(122, 13, 13);
beginShape();

vertex(300, 70);
vertex(300, 125);
vertex(275, 150);
vertex(250, 135);
vertex(230, 160);
vertex(220, 150);
vertex(200, 200);
vertex(200, 130);

endShape();

//Right bang
beginShape();
vertex(300, 70);
vertex(290, 130);
vertex(315, 145);
vertex(330, 130);
vertex(340, 140);
vertex(355, 135);
vertex(365, 150);
vertex(380, 145);
vertex(400, 200);
vertex(400, 130);
endShape();


}
