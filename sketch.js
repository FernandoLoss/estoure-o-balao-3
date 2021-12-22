var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score= 0;

var gameState= PLAY;
var END;
var PLAY;

var redGroup;
var greenGroup;
var blueGroup;
var pinkGroup;

var arrowGroup;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");


}



function setup() {
  createCanvas(400, 400);
  
  //criar um plano de fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criar um arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  redGroup = new Group();
  greenGroup = new Group();
  blueGroup = new Group();
  pinkGroup = new Group();

  arrowGroup = new Group();

  score= 0
  
}

function draw() {
 background(0);


if(gameState== PLAY){

  if (redGroup.isTouching(arrowGroup) || greenGroup.isTouching(arrowGroup) || pinkGroup.isTouching(arrowGroup) || blueGroup.isTouching(arrowGroup)) {

  redGroup.destroyEach();
  greenGroup.destroyEach();
  pinkGroup.destroyEach();
  blueGroup.destroyEach();
  arrowGroup.destroyEach();

  score +=1;
    
  }

  if (redGroup.x>400 || greenGroup.x>400 || pinkGroup.x>400 || blueGroup.x>400) {
    
  gameState= END;

  }


  // mover o chão
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //mover o arco
  bow.y = World.mouseY
  
   // soltar a flecha quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //mude o valor do balão aleatório para 4
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
   switch(select_balloon){
    case 1: redBalloon();
    break;
    case 2: greenBalloon();
    break;
    case 3: blueBalloon();
    break;
    case 4: pinkBalloon();
break;
    default: break;

  }}
  
}

drawSprites();

text("Pontuação: "+ score, 300,50);



}

if(gameState== END){

bow.destroy();
arrow.destroy();

scene.setVelocityX= 0;



}

// criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;

  arrowGroup.add(arrow);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

  redGroup.add(red);

}

function blueBalloon() {

  var blue = createSprite(0,Math.round(random(40,400)), 10 , 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;

  blueGroup.add(blue);

}

function greenBalloon() {
  
  var green = createSprite(0,Math.round(random(34,380)), 10 , 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;

  greenGroup.add(green);

}


function pinkBalloon() {

  var pink = createSprite(0,Math.round(random(40,400)), 10 , 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1.2;

  pinkGroup.add(pink);

}



