var TomCat, TomCatI1, TomCatI2, TomCatAnm;
var MouseJerry, MouseJerryI1, MouseJerryI2, MouseJerryAnm;
var GardenI;
var canvas;

function preload() {
GardenI = loadImage("images/garden.png")
TomcatI1 = loadAnimation("images/cat1.png")
TomCatI2 = loadAnimation("images/cat4.png");
MouseJerryI1 =loadAnimation("images/mouse1.png");
MouseJerryI2 = loadAnimation("images/mouse4.png");
TomCatAnm = loadAnimation("images/cat2.png", "images/cat3.png");
MouseJerryAnm = loadAnimation("images/mouse2.png", "images/mouse3.png");

}

function setup(){
 canvas = createCanvas(1000,800);
    
    TomCat = createSprite(870,600);
    TomCat.addAnimation("CatImage", TomCatI1);
    TomCat.scale = 0.2;

    MouseJerry = createSprite (200,600);
    MouseJerry.addAnimation("MouseImage", MouseJerryI1);
    MouseJerry.scale = 0.15;
}

function draw() {

    background(GardenI);

 if(TomCat.x  - MouseJerry.x < (TomCat.width - MouseJerry.width/2)){
    TomCat.velocityX = 0;
    TomCat.addAnimation ("Cat Image", TomCatI2);
    TomCat.x = 300;
    TomCat.scale = 0.2;
    TomCat.changeAnimation("Cat Image");
    MouseJerry.addAnimation("MouseImage", MouseJerryI2);
    MouseJerry.scale = 0.15;
    MouseJerry.changeAnimation("MouseImage");
}    

    drawSprites();
}


function keyPressed(){

 if (keyCode === LEFT_ARROW){
    TomCat.velocityX = -5;
    TomCat.addAnimation("tom running", TomCatAnm);
    TomCat.changeAnimation("tom running");
    MouseJerry.addAnimation("mouse teasing", MouseJerryAnm);
    MouseJerry.frameDelay = 25;
    MouseJerry.changeAnimation("mouse teasing");
   }
   
}