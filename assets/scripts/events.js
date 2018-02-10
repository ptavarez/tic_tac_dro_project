'use strict'
// const winnerChecker = require('./game_logic')

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

let gameBoard = ['', '', '', '', '', '', '', '', '']

const tieGame = function (index) {
  if (gameBoard[0] !== '' &&
   gameBoard[1] !== '' &&
   gameBoard[2] !== '' &&
   gameBoard[3] !== '' &&
   gameBoard[4] !== '' &&
   gameBoard[5] !== '' &&
   gameBoard[6] !== '' &&
   gameBoard[7] !== '' &&
   gameBoard[8] !== '') {
    return 'Tie Game'
  }
}

const gameWinner = function () {
  if (gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') {
    // 0, 1, 2
    console.log('Player One Wins')
    gameBoard = ['', '', '', '', '', '', '', '', '']
    $('td').empty()
    console.log($('td'))
    return 'Player One Wins'
  } else if (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') {
    // 0, 1, 2
    console.log('Player Two Wins')
    return 'Player Two Wins'
  } else if (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') {
    // 3, 4, 5
    console.log('Player One Wins')
    return 'Player One Wins'
  } else if (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') {
    // 3, 4, 5
    console.log('Player Two Wins')
    return 'Player Two Wins'
  } else if (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') {
    // 6, 7, 8
    console.log('Player One Wins')
    return 'Player One Wins'
  } else if (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') {
    // 6, 7, 8
    console.log('Player Two Wins')
    return 'Player Two Wins'
  } else if (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
    // 0, 3, 6
    console.log('Player One Wins')
    return 'Player One Wins'
  } else if (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') {
    // 0, 3, 6
    console.log('Player Two Wins')
    return 'Player Two Wins'
  } else if (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') {
    // 1, 4, 7
    console.log('Player One Wins')
    return 'Player One Wins'
  } else if (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') {
    // 1, 4, 7
    console.log('Player Two Wins')
    return 'Player Two Wins'
  } else if (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') {
    // 2, 5, 8
    console.log('Player One Wins')
    return 'Player One Wins'
  } else if (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') {
    // 2, 5, 8
    console.log('Player Two Wins')
    return 'Player Two Wins'
  } else if (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') {
    // 0, 4, 8
    console.log('Player One Wins')
    return 'Player One Wins'
  } else if (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') {
    // 0, 4, 8
    console.log('Player Two Wins')
    return 'Player Two Wins'
  } else if (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') {
    // 2, 4, 6
    console.log('Player One Wins')
    return 'Player One Wins'
  } else if (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O') {
    // 2, 4, 6
    console.log('Player Two Wins')
    return 'Player Two Wins'
  } else {
    console.log('Keep It Movin')
  }
}

const gameWinMessage = function () {
  $('#please').text(gameWinner())
}

const tieGameMessage = function () {
  $('#please').text(tieGame)
}

const topLeft = function () {
  $('#top-left').text(currentPlayer)
  gameBoard.splice(0, 1, currentPlayer)
}

const clickHandlers = () => {
  $('#top-left').one('click', function () {
    topLeft()
    gameWinMessage()
    tieGameMessage()
    playerTurn()
    console.log(gameBoard)
  })
  $('#top').one('click', function () {
    $('#top').text(currentPlayer)
    gameBoard.splice(1, 1, currentPlayer)
    gameWinMessage()
    tieGameMessage()
    playerTurn()
    console.log(gameBoard)
  })
  $('#top-right').one('click', function () {
    $('#top-right').text(currentPlayer)
    gameBoard.splice(2, 1, currentPlayer)
    gameWinMessage()
    tieGameMessage()
    playerTurn()
    console.log(gameBoard)
  })
  $('#middle-left').one('click', function () {
    $('#middle-left').text(currentPlayer)
    gameBoard.splice(3, 1, currentPlayer)
    gameWinMessage()
    tieGameMessage()
    playerTurn()
    console.log(gameBoard)
  })
  $('#middle').one('click', function () {
    $('#middle').text(currentPlayer)
    gameBoard.splice(4, 1, currentPlayer)
    gameWinMessage()
    tieGameMessage()
    playerTurn()
    console.log(gameBoard)
  })
  $('#middle-right').one('click', function () {
    $('#middle-right').text(currentPlayer)
    gameBoard.splice(5, 1, currentPlayer)
    gameWinMessage()
    tieGameMessage()
    playerTurn()
    console.log(gameBoard)
  })
  $('#bottom-left').one('click', function () {
    $('#bottom-left').text(currentPlayer)
    gameBoard.splice(6, 1, currentPlayer)
    gameWinMessage()
    tieGameMessage()
    playerTurn()
    console.log(gameBoard)
  })
  $('#bottom').one('click', function () {
    $('#bottom').text(currentPlayer)
    gameBoard.splice(7, 1, currentPlayer)
    gameWinMessage()
    tieGameMessage()
    playerTurn()
    console.log(gameBoard)
  })
  $('#bottom-right').one('click', function () {
    $('#bottom-right').text(currentPlayer)
    gameBoard.splice(8, 1, currentPlayer)
    gameWinMessage()
    tieGameMessage()
    playerTurn()
    console.log(gameBoard)
  })
}

module.exports = {
  clickHandlers,
  gameWinner
}
