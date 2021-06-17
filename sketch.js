var ghost1,ghost2,ghost3,ghost4
var pacmanImg
var pacMan 
var edges
var g1,g2,g3,g4;
var cardboard1,cardboard2,cardboard3,cardboard4,cardboard5,cardboard6,cardboard7,cardboard8,cardboard9;
var cardboard10,cardboard11,cardboard12,cardboard13,cardboard14,cardboard15,cardboard16,cardboard17;
var cardboard18,cardboard19,cardboard20,cardboard21,cardboard22;


function preload (){
  ghost1=loadImage("g1Img.png")
  ghost2=loadImage("g2Img.png")
  ghost3=loadImage("g3Img.png")
 
  pacmanImg =loadAnimation("pc1.png", "pc2.png")
  pcImg=loadImage("pc.png")
}
function setup(){
createCanvas(400,400)
pacMan =createSprite(20,20,20,20)
pacMan.addAnimation("moving",pacmanImg)
//pacMan.addImage(pcImg)
pacMan.scale=0.2;
var cardboard1 = createSprite(10,70,100,10);
cardboard1.shapeColor = "brown";
var cardboard2 = createSprite(100,50,10,100);
cardboard2.shapeColor = "brown";
var cardboard3 = createSprite(80,130,100,10);
cardboard3.shapeColor = "brown";
var cardboard4 = createSprite(50,250,10,100);
cardboard4.shapeColor = "brown";
var cardboard5 = createSprite(130,210,100,10);
cardboard5.shapeColor = "brown";
var cardboard6 = createSprite(10,250,100,10);
cardboard6.shapeColor = "brown";
var cardboard7 = createSprite(160,120,10,100);
cardboard7.shapeColor = "brown";
var cardboard8 = createSprite(150,20,100,10);
cardboard8.shapeColor = "brown";
var cardboard9 = createSprite(250,70,10,100);
cardboard9.shapeColor = "brown";
var cardboard10 = createSprite(270,150,100,10);
cardboard10.shapeColor = "brown";
var cardboard11 = createSprite(330,50,100,10);
cardboard11.shapeColor = "brown";
var cardboard12 = createSprite(340,125,10,100);
cardboard12.shapeColor = "brown";
var cardboard13 = createSprite(220,250,10,100);
cardboard13.shapeColor = "brown";
var cardboard14 = createSprite(330,210,150,10);
cardboard14.shapeColor = "brown";
var cardboard15 = createSprite(100,300,10,100);
cardboard15.shapeColor = "brown";
var cardboard16 = createSprite(180,310,100,10);
cardboard16.shapeColor = "brown";
var cardboard17 = createSprite(30,352,10,100);
cardboard17.shapeColor = "brown";
var cardboard18 = createSprite(175,352,10,100);
cardboard18.shapeColor = "brown";
var cardboard19 = createSprite(280,290,10,100);
cardboard19.shapeColor = "brown";
var cardboard20 = createSprite(350,270,120,10);
cardboard20.shapeColor = "brown";
var cardboard21 = createSprite(250,390,100,10);
cardboard21.shapeColor = "brown";
var cardboard22 = createSprite(330,370,10,100);
cardboard22.shapeColor = "brown";

g1= createSprite(375,345,10,10);
g1.addImage(ghost1);
g1.scale=0.2;
g1.velocityX= Math.round(random(-5,5));
g1.velocityY= Math.round(random(-5,5));

g2= createSprite(375,315,10,10)
g2.addImage(ghost2);
g2.scale=0.2
g2.velocityX= Math.round(random(-5,5));
g2.velocityY= Math.round(random(-5,5));
g3= createSprite(375,375,10,10)
g3.addImage(ghost3)
g3.scale=0.2
g3.velocityX= Math.round(random(-5,5));
g3.velocityY= Math.round(random(-5,5));

}
function draw(){
background(0)



var edges= createEdgeSprites();
pacMan.collide(edges)
g1.bounceOff(edges);
g2.bounceOff(edges);
g3.bounceOff(edges);

// g1.bounceOff(cardboard1);
// g1.bounceOff(cardboard2);
// g1.bounceOff(cardboard3);
// g1.bounceOff(cardboard4);
// g1.bounceOff(cardboard5);
// g1.bounceOff(cardboard6);
// g1.bounceOff(cardboard7);
// g1.bounceOff(cardboard8);
// g1.bounceOff(cardboard9);
// g1.bounceOff(cardboard10);
// g1.bounceOff(cardboard11);
// g1.bounceOff(cardboard12);
// g1.bounceOff(cardboard13);
// g1.bounceOff(cardboard14);
// g1.bounceOff(cardboard15);
// g1.bounceOff(cardboard16);
// g1.bounceOff(cardboard17);
// g1.bounceOff(cardboard18);
// g1.bounceOff(cardboard19);
// g1.bounceOff(cardboard20);
// g1.bounceOff(cardboard21);
 //g1.bounceOff(cardboard22);

if(keyDown("up_arrow")){
  pacMan.y=pacMan.y-2;
}

if(keyDown("down_arrow")){
  pacMan.y=pacMan.y+2;
}

if(keyDown("left_arrow")){
  pacMan.x=pacMan.x-2;
}

if(keyDown("right_arrow")){
  pacMan.x=pacMan.x+2;
}


drawSprites();
}

