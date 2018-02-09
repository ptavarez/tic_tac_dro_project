const click = require('./events.js')

// Create Players
const playerOne = 'X'
const playerTwo = 'O'

// First player is always playerOne
let currentPlayer = playerOne

// Way of switching between playerOne and playerTwo
const playerTurn = function () {
  if (currentPlayer === playerOne) {
    currentPlayer = playerTwo
  } else {
    currentPlayer = playerOne
  }
}

// Empty Game Board
const gameBoard = ['', '', '', '', '', '', '', '', '']

const gameWinner = function () {
  if (gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') {
    // 0, 1, 2
    return 'Player One Wins'
  } else if (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') {
    // 0, 1, 2
    return 'Player Two Wins'
  } else if (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') {
    // 3, 4, 5
    return 'Player One Wins'
  } else if (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') {
    // 3, 4, 5
    return 'Player Two Wins'
  } else if (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') {
    // 6, 7, 8
    return 'Player One Wins'
  } else if (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') {
    // 6, 7, 8
    return 'Player Two Wins'
  } else if (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
    // 0, 3, 6
    return 'Player One Wins'
  } else if (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') {
    // 0, 3, 6
    return 'Player Two Wins'
  } else if (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') {
    // 1, 4, 7
    return 'Player One Wins'
  } else if (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') {
    // 1, 4, 7
    return 'Player Two Wins'
  } else if (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') {
    // 2, 5, 8
    return 'Player One Wins'
  } else if (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') {
    // 2, 5, 8
    return 'Player Two Wins'
  } else if (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') {
    // 0, 4, 8
    return 'Player One Wins'
  } else if (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') {
    // 0, 4, 8
    return 'Player Two Wins'
  } else if (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') {
    // 2, 4, 6
    return 'Player One Wins'
  } else if (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O') {
    // 2, 4, 6
    return 'Player Two Wins'
  } else {
    return 'Keep It Movin!'
  }
}

let userClick = click.clickHandlers

module.exports = {
  gameBoard,
  gameWinner,
  spotChecker
}
