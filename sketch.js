
//develop is touching algorithm
var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 30, 50);
  movingRect = createSprite(200,200,50,30);

// 30/2 = 15
//50/2 = 25
//15 + 25 = 40

  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
}





function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y=mouseY;


  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2
    &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2){

    // rectangles are touching 
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else{
    //if rect are not touching 

  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
  }

  console.log(movingRect.x - fixedRect.x);
  drawSprites();
}