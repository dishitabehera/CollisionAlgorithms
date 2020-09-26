var mrect,frect, brect;
var topEdge, bottomEdge, rightEdge, leftEdge;
function setup() {
  createCanvas(800,400);
  mrect = createSprite(400, 200, 50, 50);
  frect = createSprite(500,250,50,100);
  brect = createSprite(200,200,50,50);
  topEdge = createSprite(width/2,0,width,5);
  bottomEdge = createSprite(width/2,height,width,5);
  rightEdge = createSprite(width,height/2, 5, height);
  leftEdge = createSprite(0, height/2, 5, height);
  mrect.debug = true;
  frect.debug = true;
  brect.debug = true;
  brect.velocityX = 4;
}

function draw() {
  background(255,255,255);  
  mrect.x = mouseX;
  mrect.y = mouseY;
  //IsTouching
  if(Math.abs(mrect.x-frect.x) < mrect.width/2 + frect.width/2 
  && (mrect.y-frect.y) < mrect.height/2 + frect.height/2){
    mrect.shapeColor = "black"

  }else{
    mrect.shapeColor = "gray"
  }
  // BounceOff
  if (Math.abs(brect.x-frect.x) < brect.width/2 + frect.width/2 ){
    brect.velocityX = -1*brect.velocityX;
  }
  // Displace
  if (Math.abs(brect.x-frect.x) < brect.width/2 + frect.width/2 ){
    var a = brect.velocityX
    brect.velocityX = frect.velocityX
    frect.velocityX = a;
  }
  //BounceOffedges
  if (rightEdge.x-frect.x < rightEdge.width/2 + frect.width/2) {
    frect.velocityX = -1*frect.velocityX;
  }

  drawSprites();
}