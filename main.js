console.log("main.js loaded");

/* MODEL */

var won = false;
var currentPlayer = "X";
var board = [
"", "", "", // 0, 1, 2
"", "", "", // 3, 4, 5
"", "", ""  // 6, 7, 8
];

// 1. START THE GAME
// 2. MOVE (CHANGES TURN)
//  inputs:
//  - whose turn it is
//  - what cell
//
//  outputs / outcomes:
//  - fill in cell with the correct player
//  - calculate if there's a winner
//  - turn changes

var move = function(cellIndex) {
  board[cellIndex] = currentPlayer;
  if (gameWon()) {
    won = true;
  } else {
    if (currentPlayer === "X") {  //turnary operator - alternative method of if/else:
      currentPlayer = "O";        //currentPlayer = (currentPlayer === "X" ? "O" : "X");
    } else {
      currentPlayer = "X";
    }
  }
};


// 3. WIN THE GAME
// this is a predicate function - means it returns a boolean value
var gameWon = function() {

};
