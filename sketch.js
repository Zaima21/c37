var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayersInfo;

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  if(playerCount === 4 ){
    gameState = 1;
  }

  if(gameState === 1){
    game.play();
  }
}
//car racing 
//game - control game state
//form class get the players registered
//player class - to store player info

//1. as soon as 4 player registers  - PLAY
//2. the player name and distance covered by each player
//3. highlight the current player