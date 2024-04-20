var edges 

var player
var playerImg
var player_shoot
var playerRight
var playerLeft
var playerState = 0
var playerJump

var chao

var boss

var shoot
var shootState = 0
var shootGroup

function preload(){
playerImg = loadAnimation("cavaleiroParadoOr.png")
player_shoot = loadAnimation("cavaleiro_atirando.png")
playerRight = loadAnimation("cavaleiroFake1.png","cavaleiroFake2.png","cavaleiroFake3.png","cavaleiroFake4.png")
playerLeft = loadAnimation("cavaleiroFake1L.png","cavaleiroFake2L.png","cavaleiroFake3L.png","cavaleiroFake4L.png")
playerJump = loadAnimation("cavaleiroPulando.png","cavaleiroPulando2.png")

playerRight.playing = true
playerLeft.playing = true
playerJump.playing = true
}


function setup(){
createCanvas(1366,651)

edges = createEdgeSprites()

chao = createSprite(650,630,1500,50)

prota()
chefe()

shootGroup = new Group()


}


function draw(){
background("purple")

movement()

player.collide(chao)
chao.debug=true

text(player.y,100,100)
drawSprites()
}

function prota(){
 player = createSprite(200,600,30,30)
 player.addAnimation("parado",playerImg)
 player.addAnimation("atirando",player_shoot)
 player.addAnimation("direita",playerRight)
 player.addAnimation("esquerda",playerLeft)
 player.addAnimation("jumping",playerJump)
 player.scale = 0.5
 player.debug = true

 

}

function movement(){

  if(keyDown(UP_ARROW) && player.y > 547){
    player.velocityY = -20
    player.changeAnimation("jumping",playerJump)

   }
   if(keyDown(RIGHT_ARROW) && player.x<1352){
    player.x = player.x +12
    if(player.y>545){
    player.changeAnimation("direita",playerRight)
  }
  }

  
   if(keyDown(LEFT_ARROW)&& player.x>14){
    player.x = player.x -12
    if(player.y>545){
      player.changeAnimation("esquerda",playerLeft)
    }

   }

   if(keyDown(32)){
    tiro()

   }
   if(player.y < 549.25){
  player.velocityY = player.velocityY + 1
   }
   if(shootState === 0 && !keyDown(RIGHT_ARROW) && !keyDown(LEFT_ARROW) && player.y > 547){
    player.changeAnimation("parado",playerImg)
   }
}

function chefe(){
boss = createSprite(1100,540,90,130)
}

function tiro(){
  if(shootState == 0){
  shoot = createSprite(player.x,player.y,10,10);
  shoot.velocityX = 45
  shootGroup.add(shoot)
  shootState = 1

  player.changeAnimation("atirando",player_shoot)

  setTimeout(()=>{
    player.changeAnimation("parado",playerImg)
  },500)

  setTimeout(()=>{
    shootState = 0
    
  },1000)
  }
}
