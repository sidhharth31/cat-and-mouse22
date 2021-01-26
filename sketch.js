var cat;
var cati1;
var cati2;
var cati3;
var cati4;
var background1;
var background1Image;
var mouse;
var mousei1;
var mousei2;
var mousei3;
var mousei4;

function preload() {
    //load the images here
    cat1 = loadAnimation("tomOne.png")
    cat2 = loadAnimation("tomTwo.png","tomThree.png")
    cat3 = loadAnimation("tomFour.png")
    background1Image = loadImage("garden.png")
    mouse1 = loadAnimation("jerryOne.png")
    mouse2 = loadAnimation("jerryTwo.png","jerryThree.png")
    mouse3 = loadAnimation("jerryFour")
}

function setup(){
    createCanvas(500,500,25,25);
     //create tom and jerry sprites here

    
    
    cat = createSprite(380,420,50,50)
    cat.addImage(cat1)
    cat.scale = 0.1

    mouse = createSprite(90,420,50,50)
    mouse.addImage(mousei)
    mouse.scale = 0.1
  
}

function draw() { 
    background(bg);
    if(cat.x - mouse.x < (cat.width - cat.width)/2)
     { cat.velocityX=0; cat.addAnimation("catLastImage", catImg3); cat.x =300; cat.scale=0.2; cat.changeAnimation("catLastImage"); mouse.addAnimation("mouseLastImage", mouseImg3); mouse.scale=0.15; mouse.changeAnimation("mouseLastImage"); } drawSprites(); }


{

}





     
    keyPressed();
    drawSprites();
{
    
}
function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW)
     cat.velocityX = -5;
     cat.addAnimation("catRunning",cati2);
     cat.changeAnimation("catRunning");
     mouse.addAnimation("mouseRunning",mousei1);
     
}
