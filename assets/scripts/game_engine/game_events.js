'use strict'

const gameStatus = require('../game_api/api.js')
const gameEvents = require('../game_api/events.js')
const gameApi = require('../game_api/api.js')

// Create Game Board
let gameBoard = ['', '', '', '', '', '', '', '', '']

// Create Players
const playerOne = 'X'
const playerTwo = 'O'

// First player is always X
let currentPlayer = playerOne

// Way of switching between playerOne and playerTwo
const playerTurn = function () {
  if (currentPlayer === playerOne) {
    currentPlayer = playerTwo
  } else {
    currentPlayer = playerOne
  }
}

// Current Player Indicator
const turnIndicator = function () {
  if (currentPlayer !== playerOne) {
    $('#playerTwo').empty()
    $('#playerOne').text('Player X\'s Turn')
  } else if (currentPlayer === playerOne) {
    $('#playerOne').empty()
    $('#playerTwo').text('Player O\'s Turn')
  }
}

// Tie Game Checker
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
    gameBoard = ['', '', '', '', '', '', '', '', '']
    gameStatus.updateGameStatus()
    $('td').empty()
    $('.game-nav').hide()
    $('#playerOne').hide()
    $('#playerTwo').hide()
    $('table').hide()
    $('.sign-in-success').show()
    return 'Tie Game'
  }
}

// Game Winner & Reset Function
const gameWinner = function () {
  if (gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') {
    // 0, 1, 2
    gameBoard = ['', '', '', '', '', '', '', '', '']
    gameStatus.updateGameStatus()
    $('td').empty()
    $('.game-nav').hide()
    $('#playerOne').hide()
    $('#playerTwo').hide()
    $('table').hide()
    $('.sign-in-success').show()
    return 'Player One Wins'
  } else if (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') {
    // 0, 1, 2
    gameBoard = ['', '', '', '', '', '', '', '', '']
    gameStatus.updateGameStatus()
    $('td').empty()
    $('.game-nav').hide()
    $('#playerOne').hide()
    $('#playerTwo').hide()
    $('table').hide()
    $('.sign-in-success').show()
    return 'Player Two Wins'
  } else if (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') {
    // 3, 4, 5
    gameBoard = ['', '', '', '', '', '', '', '', '']
    gameStatus.updateGameStatus()
    $('td').empty()
    $('.game-nav').hide()
    $('#playerOne').hide()
    $('#playerTwo').hide()
    $('table').hide()
    $('.sign-in-success').show()
    return 'Player One Wins'
  } else if (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') {
    // 3, 4, 5
    gameBoard = ['', '', '', '', '', '', '', '', '']
    gameStatus.updateGameStatus()
    $('td').empty()
    $('.game-nav').hide()
    $('#playerOne').hide()
    $('#playerTwo').hide()
    $('table').hide()
    $('.sign-in-success').show()
    return 'Player Two Wins'
  } else if (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') {
    // 6, 7, 8
    gameBoard = ['', '', '', '', '', '', '', '', '']
    gameStatus.updateGameStatus()
    $('td').empty()
    $('.game-nav').hide()
    $('#playerOne').hide()
    $('#playerTwo').hide()
    $('table').hide()
    $('.sign-in-success').show()
    return 'Player One Wins'
  } else if (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') {
    // 6, 7, 8
    gameBoard = ['', '', '', '', '', '', '', '', '']
    gameStatus.updateGameStatus()
    $('td').empty()
    $('.game-nav').hide()
    $('#playerOne').hide()
    $('#playerTwo').hide()
    $('table').hide()
    $('.sign-in-success').show()
    return 'Player Two Wins'
  } else if (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
    // 0, 3, 6
    gameBoard = ['', '', '', '', '', '', '', '', '']
    gameStatus.updateGameStatus()
    $('td').empty()
    $('.game-nav').hide()
    $('#playerOne').hide()
    $('#playerTwo').hide()
    $('table').hide()
    $('.sign-in-success').show()
    return 'Player One Wins'
  } else if (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') {
    // 0, 3, 6
    gameBoard = ['', '', '', '', '', '', '', '', '']
    gameStatus.updateGameStatus()
    $('td').empty()
    $('.game-nav').hide()
    $('#playerOne').hide()
    $('#playerTwo').hide()
    $('table').hide()
    $('.sign-in-success').show()
    return 'Player Two Wins'
  } else if (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') {
    // 1, 4, 7
    gameBoard = ['', '', '', '', '', '', '', '', '']
    gameStatus.updateGameStatus()
    $('td').empty()
    $('.game-nav').hide()
    $('#playerOne').hide()
    $('#playerTwo').hide()
    $('table').hide()
    $('.sign-in-success').show()
    return 'Player One Wins'
  } else if (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') {
    // 1, 4, 7
    gameBoard = ['', '', '', '', '', '', '', '', '']
    gameStatus.updateGameStatus()
    $('td').empty()
    $('.game-nav').hide()
    $('#playerOne').hide()
    $('#playerTwo').hide()
    $('table').hide()
    $('.sign-in-success').show()
    return 'Player Two Wins'
  } else if (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') {
    // 2, 5, 8
    gameBoard = ['', '', '', '', '', '', '', '', '']
    gameStatus.updateGameStatus()
    $('td').empty()
    $('.game-nav').hide()
    $('#playerOne').hide()
    $('#playerTwo').hide()
    $('table').hide()
    $('.sign-in-success').show()
    return 'Player One Wins'
  } else if (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') {
    // 2, 5, 8
    gameBoard = ['', '', '', '', '', '', '', '', '']
    gameStatus.updateGameStatus()
    $('td').empty()
    $('.game-nav').hide()
    $('#playerOne').hide()
    $('#playerTwo').hide()
    $('table').hide()
    $('.sign-in-success').show()
    return 'Player Two Wins'
  } else if (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') {
    // 0, 4, 8
    gameBoard = ['', '', '', '', '', '', '', '', '']
    gameStatus.updateGameStatus()
    $('td').empty()
    $('.game-nav').hide()
    $('#playerOne').hide()
    $('#playerTwo').hide()
    $('table').hide()
    $('.sign-in-success').show()
    return 'Player One Wins'
  } else if (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') {
    // 0, 4, 8
    gameBoard = ['', '', '', '', '', '', '', '', '']
    gameStatus.updateGameStatus()
    $('td').empty()
    $('.game-nav').hide()
    $('#playerOne').hide()
    $('#playerTwo').hide()
    $('table').hide()
    $('.sign-in-success').show()
    return 'Player Two Wins'
  } else if (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') {
    // 2, 4, 6
    gameBoard = ['', '', '', '', '', '', '', '', '']
    gameStatus.updateGameStatus()
    $('td').empty()
    $('.game-nav').hide()
    $('#playerOne').hide()
    $('#playerTwo').hide()
    $('table').hide()
    $('.sign-in-success').show()
    return 'Player One Wins'
  } else if (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O') {
    // 2, 4, 6
    gameBoard = ['', '', '', '', '', '', '', '', '']
    gameStatus.updateGameStatus()
    $('td').empty()
    $('.game-nav').hide()
    $('#playerOne').hide()
    $('#playerTwo').hide()
    $('table').hide()
    $('.sign-in-success').show()
    return 'Player Two Wins'
  }
}

// Game Win Message
const gameWinMessage = function () {
  $('#please').text(gameWinner())
}

// Tie Game Message
const tieGameMessage = function () {
  $('#please').text(tieGame)
}

// Move Made Message
const moveMade = function () {
  $('#please').text('Move Made')
}

// Top left box & stop duplicate click
const topLeft = function () {
  if ($('#top-left').text() === '') {
    $('#top-left').text(currentPlayer)
    gameBoard.splice(0, 1, currentPlayer)
    gameApi.updateGameMove($('#top-left').data('cellIndex'), currentPlayer)
    // gameEvents.onUpdateGame()
  } else {
    moveMade()
    playerTurn()
  }
}

// Top box & stop duplicate click
const top = function () {
  if ($('#top').text() === '') {
    $('#top').text(currentPlayer)
    gameBoard.splice(1, 1, currentPlayer)
    gameApi.updateGameMove($('#top').data('cellIndex'), currentPlayer)
  } else {
    moveMade()
    playerTurn()
  }
}

// Top right box & stop duplicate click
const topRight = function () {
  if ($('#top-right').text() === '') {
    $('#top-right').text(currentPlayer)
    gameBoard.splice(2, 1, currentPlayer)
    gameApi.updateGameMove($('#top-right').data('cellIndex'), currentPlayer)
  } else {
    moveMade()
    playerTurn()
  }
}

// Middle left box & stop duplicate click
const middleLeft = function () {
  if ($('#middle-left').text() === '') {
    $('#middle-left').text(currentPlayer)
    gameBoard.splice(3, 1, currentPlayer)
    gameApi.updateGameMove($('#middle-left').data('cellIndex'), currentPlayer)
  } else {
    moveMade()
    playerTurn()
  }
}

// Middle box & stop duplicate click
const middle = function () {
  if ($('#middle').text() === '') {
    $('#middle').text(currentPlayer)
    gameBoard.splice(4, 1, currentPlayer)
    gameApi.updateGameMove($('#middle').data('cellIndex'), currentPlayer)
  } else {
    moveMade()
    playerTurn()
  }
}

// Middle right box & stop duplicate click
const middleRight = function () {
  if ($('#middle-right').text() === '') {
    $('#middle-right').text(currentPlayer)
    gameBoard.splice(5, 1, currentPlayer)
    gameApi.updateGameMove($('#middle-right').data('cellIndex'), currentPlayer)
  } else {
    moveMade()
    playerTurn()
  }
}

// Bottom left box & stop duplicate click
const bottomLeft = function () {
  if ($('#bottom-left').text() === '') {
    $('#bottom-left').text(currentPlayer)
    gameBoard.splice(6, 1, currentPlayer)
    gameApi.updateGameMove($('#bottom-left').data('cellIndex'), currentPlayer)
  } else {
    moveMade()
    playerTurn()
  }
}

// Bottom box & stop duplicate click
const bottom = function () {
  if ($('#bottom').text() === '') {
    $('#bottom').text(currentPlayer)
    gameBoard.splice(7, 1, currentPlayer)
    gameApi.updateGameMove($('#bottom').data('cellIndex'), currentPlayer)
  } else {
    moveMade()
    playerTurn()
  }
}

// Bottom right box & stop duplicate click
const bottomRight = function () {
  if ($('#bottom-right').text() === '') {
    $('#bottom-right').text(currentPlayer)
    gameBoard.splice(8, 1, currentPlayer)
    gameApi.updateGameMove($('#bottom-right').data('cellIndex'), currentPlayer)
  } else {
    moveMade()
    playerTurn()
  }
}

// Click function
const clickHandlers = () => {
  $('#top-left').on('click', function () {
    topLeft()
    gameWinMessage()
    tieGameMessage()
    turnIndicator()
    playerTurn()
  })
  $('#top').on('click', function () {
    top()
    gameWinMessage()
    tieGameMessage()
    turnIndicator()
    playerTurn()
  })
  $('#top-right').on('click', function () {
    topRight()
    gameWinMessage()
    tieGameMessage()
    turnIndicator()
    playerTurn()
  })
  $('#middle-left').on('click', function () {
    middleLeft()
    gameWinMessage()
    tieGameMessage()
    turnIndicator()
    playerTurn()
  })
  $('#middle').on('click', function () {
    middle()
    gameWinMessage()
    tieGameMessage()
    turnIndicator()
    playerTurn()
  })
  $('#middle-right').on('click', function () {
    middleRight()
    gameWinMessage()
    tieGameMessage()
    turnIndicator()
    playerTurn()
  })
  $('#bottom-left').on('click', function () {
    bottomLeft()
    gameWinMessage()
    tieGameMessage()
    turnIndicator()
    playerTurn()
  })
  $('#bottom').on('click', function () {
    bottom()
    gameWinMessage()
    tieGameMessage()
    turnIndicator()
    playerTurn()
  })
  $('#bottom-right').on('click', function () {
    bottomRight()
    gameWinMessage()
    tieGameMessage()
    turnIndicator()
    playerTurn()
  })
}

module.exports = {
  clickHandlers,
  gameWinner,
  turnIndicator,
  currentPlayer
}
