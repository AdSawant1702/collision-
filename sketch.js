

var movingRect, fixedRect;
function setup() {
  createCanvas(800, 400);
  movingRect = createSprite(200, 200, 30, 60);
  fixedRect = createSprite(600, 200, 60, 30);

  movingRect.debug = true;
  fixedRect.debug = true;

  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";

  movingRect.velocityX = 3;
  fixedRect.velocityX = -3;

}

function draw() {
  background(0);
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if (movingRect.x - fixedRect.x <= fixedRect.width / 2 + movingRect.width / 2 &&
    fixedRect.x - movingRect.x <= fixedRect.width / 2 + movingRect.width / 2 &&
    fixedRect.y - movingRect.y <= fixedRect.height / 2 + movingRect.height / 2 &&
    movingRect.y - fixedRect.y <= fixedRect.height / 2 + movingRect.height / 2) {
    movingRect.shapeColor = "pink";
    fixedRect.shapeColor = "pink";
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  } else {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }

  //console.log(movingRect.x - fixedRect.x);
  //console.log(fixedRect.width / 2 + movingRect.width / 2);

  drawSprites();
}