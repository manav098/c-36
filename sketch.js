var canvas , backgroundImg , playerCount , database , form , player , game , gameState = 0;
function setup() {
 canvas=createCanvas(400,400)
database=firebase.database();
game = new Game()
game.getState()
game.start()

}

function draw() {
  

}
