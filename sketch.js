
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
monkey = createSprite(100,320,20,20)
  monkey.scale = 0.2
  monkey.addAnimation("running",monkey_running)
  ground = createSprite(200,380,400,10)
  
}


function draw() {
  background("blue")
monkey.collide(ground)
  bananas()
  stroke("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  textSize(20)
  fill("black")
  text("Survival Time:" + survivalTime,100,50);
  drawSprites()
}

function bananas(){
  if(frameCount%60 === 0){
    banana = createSprite(400,200,20,20)
    banana.addImage(bananaImage)
    banana.velocityX = -3
    banana.scale = 0.2
  }
}
  





