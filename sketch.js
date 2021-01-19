//declared global variables for cars,walls and lines
var zenia,tourus,cyclop,tesla;
var wall1;
var wall2;
var wall3;
var wall4;
var speed,speed1,speed2,speed3;
var weight;
var line1;
var line2;
var line3;


function setup() {
  createCanvas(1200,400);
  //select speed randomly
  speed=random(10,200);
  speed1=random(20,200);
  speed2=random(5,200);
  speed3=random(50,200);
  
  //select weight randomly
  weight1=random(400,1500);
  weight2=random(300,1500);
  weight3=random(250,1500);
  weight4=random(500,1500);


  //created a zenia sprite
  zenia =createSprite(0,50,50,50);
   //created a tourus sprite
  tourus=createSprite(0,150,50,50);
   //created a cyclop sprite
  cyclop=createSprite(0,250,50,50);
   //created a tesla sprite
  tesla=createSprite(0,350,50,50);


   //created a wall1 sprite
  wall1=createSprite(1100,50,50,50);
  wall1.shapeColor="cyan";
   //created a wall2 sprite
  wall2=createSprite(1100,150,60,50);
  wall2.shapeColor="orange";
   //created a wall3 sprite
  wall3=createSprite(1100,250,60,50);
  wall3.shapeColor="violet";
   //created a wall4 sprite
  wall4=createSprite(1100,350,60,50)
  wall4.shapeColor="purple";


   //created a line1 sprite
  line1=createSprite(200,100,2250,5);
  line1.shapeColor="orange";
   //created a line2 sprite
  line2=createSprite(200,200,2250,5);
  line2.shapeColor="white";
   //created a line3 sprite
  line3=createSprite(200,300,2250,5);
  line3.shapeColor="green";

}

function draw() {
  //to clear the screen
  background("black"); 
  //to give all cars speed
  zenia.velocityX=speed; 
  tourus.velocityX=speed1;
  cyclop.velocityX=speed2;
  tesla.velocityX=speed3;
 

  if(wall1.x-zenia.x<(zenia.width+wall1.width)/2){
    zenia.velocityX=0;
    var deformation=0.5*weight1*speed*speed/22509;
    if(deformation>180){
      zenia.shapeColor=color(255,0,0);
    }
    if(deformation<180&&deformation>100){
      zenia.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      zenia.shapeColor=color(0,255,0);
    }
  }
  
  
  if(wall2.x-tourus.x<(tourus.width+wall2.width)/2){
    tourus.velocityX=0;
    var deformation=0.5*weight2*speed*speed/22509;
    if(deformation>180){
      tourus.shapeColor=color(255,0,0);
    }
    if(deformation<180&&deformation>100){
      tourus.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      tourus.shapeColor=color(0,255,0);
    }
  }
  if(wall3.x-cyclop.x<(cyclop.width+wall3.width)/2){
    cyclop.velocityX=0;
    var deformation=0.5*weight3*speed*speed/22509;
    if(deformation>180){
      cyclop.shapeColor=color(255,0,0);
    }
    if(deformation<180&&deformation>100){
      cyclop.shapeColor=color(230,230,0);
    }
    if(deformation<100){
     cyclop.shapeColor=color(0,255,0);
    }
  }
  
  
  if(wall4.x-tesla.x<(tesla.width+wall4.width)/2){
    tesla.velocityX=0;
    var deformation=0.5*weight4*speed*speed/22509;
    if(deformation>180){
    tesla.shapeColor=color(255,0,0);
    }
    if(deformation<180&&deformation>100){
      tesla.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      tesla.shapeColor=color(0,255,0);
    }
  

  }
  
  

  
  //to display the sprite
  drawSprites();
  
  //to display car names
  fill("white");
  textSize(18);
  text("ZENIA",1100,50);
  text("TOURUS",1100,150);
  text("CYCLOP",1100,250);
  text("TESLA",1100,350);


}