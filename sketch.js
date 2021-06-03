var background,backgroundImg;
var mouse,mouseImg,mouseImg1,mouseImg2;
 var  tom,tomImg,tomImg1,tomImg2;
function preload() {
    //load the images here
    backgroundImg=loadImage("images/garden.png");
    tomImg=loadAnimation("images/cat1.png");
    tomImg1=loadAnimation("images/cat2.png","images/cat3.png")
    tomImg2=loadAnimation("images/cat4.png");
    mouseImg=loadAnimation("images/mouse1.png")
    mouseImg1=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImg2=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,700);
    //create tom and jerry sprites here
     tom=createSprite(870,600)
     tom.addAnimation("tomlying",tomImg)
    tom.scale=0.2

    mouse=createSprite(150,600);
    mouse.addAnimation("mouseeating",mouseImg);
    mouse.scale=0.15;
}

function draw() {

    background(backgroundImg);

    //Write condition here to evalute if tom and jerry collide
    if(tom.x-mouse.x< (tom.width - mouse.width)/2){
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomImg2);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        mouse.addAnimation("mousefinding", mouseImg2);
        mouse.scale=0.15;
        mouse.changeAnimation("mousefinding");


}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5; 
    tom.addAnimation("tomRunning", tomImg1);
    tom.changeAnimation("tomRunning",tomImg1);
}
if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseteasing", mouseImg1);
    mouse.changeAnimation("mouseteasing");
}

}
