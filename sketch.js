var fixedRect,movingRect;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(400, 200, 50, 80);
  movingRect = createSprite(200, 400, 80, 50);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
}

function draw() {
  background(0); 
  movingRect.y = mouseY;
  movingRect.x = mouseX;
  
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
    }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  drawSprites();
}