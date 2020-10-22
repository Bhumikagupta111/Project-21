var bullet,wall;
var speed,weight;
var thickess;
function setup() {
  createCanvas(800,400);
speed=random(223,321);
weight=random(30,52);
  bullet=createSprite(20,300,50,10);
  thickness=random(22,83);
  wall=createSprite(750,300,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX=speed;
  
}

function draw() {
  background(255,255,255);  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2 ){
  bullet.velocityX=0;
  var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
  if(damage>10) {
    wall.shapeColor="red";
  }
  if(damage<10) {
    wall.shapeColor="green";
  }
  }
  drawSprites();
}