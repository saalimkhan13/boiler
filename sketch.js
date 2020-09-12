var fixedrect,movingrect;
var go1,go2,go3,go4;


function setup() {
  createCanvas(1200,800);
 fixedrect=createSprite(600, 400, 50, 80);
 //fixedrect.shapeColor="blue";
 //fixedrect.debug=true;
 movingrect=createSprite(400,200,80,50);
 movingrect.shapeColor="lightBlue";
 movingrect.debug=true;
 
 go1.createSprite(100,100,50,50);
 go2.createSprite(200,100,50,50);
 go3.createSprite(300,100,50,50);
 go4.createSprite(400,100,50,50);

 go1.shapeColor="red";
 go2.shapeColor="red";
 go3.shapeColor="red";
 go4.shapeColor="red";
}

function draw() {
  background(255,255,255);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  console.log(movingrect.x-fixedrect.x);
  
if (isTouching(movingrect,g01)){
  movingrect.shapeColor="green";
  go1.shapeColor="green";
}
else {
  movingrect.shapeColor="lightBlue";
  go1.shapeColor="blue";
}


drawSprites();
}

function isTouching(object1,object2){
  if(Object1.x-object2.x<object1.width/2+object2.width/2 &&                                                                        
   object2.x-object1.x<object2.width/2+object1.width/2&&
   object1.y-object2.y<Object1.height/2+object2.height/2 &&                                                                        
   object2.y-object2.y<object2.height/2+object1.height/2){
     return true;
 }
  else {
     return false;        
  } 
} 
