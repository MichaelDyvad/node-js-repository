let score;

let playerOne;
let playerTwo;

export function initializePlayers(playerOneInitialize, playerTwoInitialize){
    playerOne = playerOneInitialize; 
    playerTwo = playerTwoInitialize;
}

export function initializeScore(scoreInitialized){
    score = scoreInitialized;
}

export function intializeGame(){
    console.log(playerOne, playerTwo);
    console.log("Game starts with score...", score);
}