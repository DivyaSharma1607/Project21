
var bullet,wall,thickness;
var speed,weight;


function setup() {
     createCanvas(1600,400);
 
 thickness = createSprite(22,83);

  bullet = createSprite(50,200,50,10);
 wall = createSprite(1200,200, thickness ,100);                  
  
 bullet.velocityX = 5;

 speed=random(25,31);
 weight=random(400,1500);
bullet.velocityX = speed;

}

function draw() {
  background("black");  

  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>180)
    {
      bullet.shapeColor="white";
    }
    if(deformation<180 && deformation>100)
    {
      bullet.shapeColor="white";

    }
    if(deformation<100)
    {
      bullet.shapeColor="white";

    }
  }
   
  if(hasCollided(bullet.wall))
  {

    bullet.velocityX=0;
    var damage=0.5*weight*height*speed*speed/(thickness*thickness*thickness);

    if(damage>10)
    {
      wall.shapeColor="red";
    }
    if(damage<10)
    {
      wall.shapecolor="green";
    }
  }
 
  drawSprites();

}

function hasCollided (lbullet,lwall)
{
bulletRightEdge=lbullet +lbullet;
wallLeftEdge=lwall;
if(bulletRightEdge>=wallLeftEdge)
{
  return true


}
return false;
}