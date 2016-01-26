console.log("main.js loaded");

/* MODEL */

var won = false;
var currentPlayer = "X";
var board = [
  "", "", "", // 0, 1, 2
  "", "", "", // 3, 4, 5
  "", "", ""  // 6, 7, 8
];

// 1. START THE GAME (reset to inital state)
// inputs:
// - current player, board,
// output:
// - board is empty

var startGame = function() {
  won = false;
  currentPlayer = "X";
  board = [
    "", "", "", // 0, 1, 2
    "", "", "", // 3, 4, 5
    "", "", ""  // 6, 7, 8
  ];
};

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
// inputs:
// - board
//
// outputs:
// - true || false
var gameWon = function() {
  return (
    ((board[0] === board[1]) && (board[0] === board[2]) && (board[0] !== "")) ||
    ((board[3] === board[4]) && (board[3] === board[5]) && (board[0] !== "")) ||
    ((board[6] === board[7]) && (board[6] === board[8]) && (board[6] !== ""))
  )
};


// RENDER OUR VIEW

var render = function() {

};
