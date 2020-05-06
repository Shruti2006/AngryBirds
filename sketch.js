var fixedrect,moverect




function setup() {
  createCanvas(800,400);
  fixedrect =  createSprite(200, 200, 50, 80);
  fixedrect.shapeColor = "green"
moverect = createSprite(400,200,80,30)
moverect.shapeColor = "green"
}


function draw() {
  background(0,0,0);  
  console.log(moverect.x-fixedrect.x)
  moverect.y = World.mouseY
  moverect.x = World.mouseX
  if(moverect.x-fixedrect.x<fixedrect.width/2+moverect.width/2 && fixedrect.x-moverect.x<moverect.width/2+fixedrect.width/2){
fixedrect.shapeColor = "red"
moverect.shapeColor = "red"
  }
  else{
    fixedrect.shapeColor = "green"
moverect.shapeColor = "green"
  }
  
  drawSprites();
}