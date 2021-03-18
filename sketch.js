var fixedRect, movingRect;
var rect1,rect2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(200, 200, 50, 30);
  rect2 = createSprite(600, 200, 50, 30);
  rect1.velocityX=10
  rect2.velocityX=-10
}

function draw() {
  background(0,0,0);  
  bounce(rect1,rect2);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(fixedRect, movingRect)){
    fixedRect.shapeColor = "black";
   movingRect.shapeColor = "black";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  drawSprites();
}