var waitbgimg
var gameState="wait"



function preload(){
    waitbgimg=loadImage("assets/splash3.gif")
playerimg=loadImage("assets/player1.png")
player2img = loadImage("assets/player2.png")
playerSelectionBg = loadImage("assets/playerSelect.gif")
}

function setup(){
createCanvas(windowWidth,windowHeight)

playButton = createImg("assets/startbutton2.png")
playButton.position(width/2 - width/8,height/5 *3)
playButton.size(width/4,height/4)


nextButton = createImg("assets/button.png")
nextButton.position(width/2 - 300,height-400)
nextButton.size(500,300)
nextButton.hide()

player=createSprite(width/3,height/4 *2.4)
player.addImage(playerimg)
player.scale=windowHeight/1503.3333333333335
player.visible=false
player2=createSprite(width/3 *2,height/4 *2.4)
player2.addImage(player2img)
player2.scale=windowHeight/902
player2.visible=false


}


function draw(){
console.log(windowHeight)
    if (gameState==="wait"){
        background(waitbgimg)
    }

    playButton.mousePressed(()=>{
gameState="playerSelect"
playButton.hide()
    })


    if(gameState==="playerSelect"){
        background(playerSelectionBg)
        player.visible=true
        player2.visible=true

    }
    drawSprites()



}