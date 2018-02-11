'use strict'

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
    $('#playerOne').text('First Player\'s turn')
  } else if (currentPlayer === playerOne) {
    $('#playerOne').empty()
    $('#playerTwo').text('Second Player\'s Turn')
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
    $('td').empty()
    return 'Tie Game'
  }
}

// Game Winner & Reset Function
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
    gameBoard = ['', '', '', '', '', '', '', '', '']
    $('td').empty()
    return 'Player Two Wins'
  } else if (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') {
    // 3, 4, 5
    console.log('Player One Wins')
    gameBoard = ['', '', '', '', '', '', '', '', '']
    $('td').empty()
    return 'Player One Wins'
  } else if (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') {
    // 3, 4, 5
    console.log('Player Two Wins')
    gameBoard = ['', '', '', '', '', '', '', '', '']
    $('td').empty()
    return 'Player Two Wins'
  } else if (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') {
    // 6, 7, 8
    console.log('Player One Wins')
    gameBoard = ['', '', '', '', '', '', '', '', '']
    $('td').empty()
    return 'Player One Wins'
  } else if (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') {
    // 6, 7, 8
    console.log('Player Two Wins')
    gameBoard = ['', '', '', '', '', '', '', '', '']
    $('td').empty()
    return 'Player Two Wins'
  } else if (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
    // 0, 3, 6
    console.log('Player One Wins')
    gameBoard = ['', '', '', '', '', '', '', '', '']
    $('td').empty()
    return 'Player One Wins'
  } else if (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') {
    // 0, 3, 6
    console.log('Player Two Wins')
    gameBoard = ['', '', '', '', '', '', '', '', '']
    $('td').empty()
    return 'Player Two Wins'
  } else if (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') {
    // 1, 4, 7
    console.log('Player One Wins')
    gameBoard = ['', '', '', '', '', '', '', '', '']
    $('td').empty()
    return 'Player One Wins'
  } else if (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') {
    // 1, 4, 7
    console.log('Player Two Wins')
    gameBoard = ['', '', '', '', '', '', '', '', '']
    $('td').empty()
    return 'Player Two Wins'
  } else if (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') {
    // 2, 5, 8
    console.log('Player One Wins')
    gameBoard = ['', '', '', '', '', '', '', '', '']
    $('td').empty()
    return 'Player One Wins'
  } else if (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') {
    // 2, 5, 8
    console.log('Player Two Wins')
    gameBoard = ['', '', '', '', '', '', '', '', '']
    $('td').empty()
    return 'Player Two Wins'
  } else if (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') {
    // 0, 4, 8
    console.log('Player One Wins')
    gameBoard = ['', '', '', '', '', '', '', '', '']
    $('td').empty()
    return 'Player One Wins'
  } else if (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') {
    // 0, 4, 8
    console.log('Player Two Wins')
    gameBoard = ['', '', '', '', '', '', '', '', '']
    $('td').empty()
    return 'Player Two Wins'
  } else if (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') {
    // 2, 4, 6
    console.log('Player One Wins')
    gameBoard = ['', '', '', '', '', '', '', '', '']
    $('td').empty()
    return 'Player One Wins'
  } else if (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O') {
    // 2, 4, 6
    console.log('Player Two Wins')
    gameBoard = ['', '', '', '', '', '', '', '', '']
    $('td').empty()
    return 'Player Two Wins'
  } else {
    console.log('Keep It Movin')
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

// Top left box
const topLeft = function () {
  if ($('#top-left').text() === '') {
    $('#top-left').text(currentPlayer)
    gameBoard.splice(0, 1, currentPlayer)
  } else {
    moveMade()
    playerTurn()
  }
}

// Top box
const top = function () {
  if ($('#top').text() === '') {
    $('#top').text(currentPlayer)
    gameBoard.splice(1, 1, currentPlayer)
  } else {
    moveMade()
    playerTurn()
  }
}

// Top right box
const topRight = function () {
  if ($('#top-right').text() === '') {
    $('#top-right').text(currentPlayer)
    gameBoard.splice(2, 1, currentPlayer)
  } else {
    moveMade()
    playerTurn()
  }
}

// Middle left box
const middleLeft = function () {
  if ($('#middle-left').text() === '') {
    $('#middle-left').text(currentPlayer)
    gameBoard.splice(3, 1, currentPlayer)
  } else {
    moveMade()
    playerTurn()
  }
}

// Middle box
const middle = function () {
  if ($('#middle').text() === '') {
    $('#middle').text(currentPlayer)
    gameBoard.splice(4, 1, currentPlayer)
  } else {
    moveMade()
    playerTurn()
  }
}

// Middle right box
const middleRight = function () {
  if ($('#middle-right').text() === '') {
    $('#middle-right').text(currentPlayer)
    gameBoard.splice(5, 1, currentPlayer)
  } else {
    moveMade()
    playerTurn()
  }
}

// Bottom left box
const bottomLeft = function () {
  if ($('#bottom-left').text() === '') {
    $('#bottom-left').text(currentPlayer)
    gameBoard.splice(6, 1, currentPlayer)
  } else {
    moveMade()
    playerTurn()
  }
}

// Bottom box
const bottom = function () {
  if ($('#bottom').text() === '') {
    $('#bottom').text(currentPlayer)
    gameBoard.splice(7, 1, currentPlayer)
  } else {
    moveMade()
    playerTurn()
  }
}

// Bottom right box
const bottomRight = function () {
  if ($('#bottom-right').text() === '') {
    $('#bottom-right').text(currentPlayer)
    gameBoard.splice(8, 1, currentPlayer)
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
    console.log(gameBoard)
  })
  $('#top').on('click', function () {
    top()
    gameWinMessage()
    tieGameMessage()
    turnIndicator()
    playerTurn()
    console.log(gameBoard)
  })
  $('#top-right').on('click', function () {
    topRight()
    gameWinMessage()
    tieGameMessage()
    turnIndicator()
    playerTurn()
    console.log(gameBoard)
  })
  $('#middle-left').on('click', function () {
    middleLeft()
    gameWinMessage()
    tieGameMessage()
    turnIndicator()
    playerTurn()
    console.log(gameBoard)
  })
  $('#middle').on('click', function () {
    middle()
    gameWinMessage()
    tieGameMessage()
    turnIndicator()
    playerTurn()
    console.log(gameBoard)
  })
  $('#middle-right').on('click', function () {
    middleRight()
    gameWinMessage()
    tieGameMessage()
    turnIndicator()
    playerTurn()
    console.log(gameBoard)
  })
  $('#bottom-left').on('click', function () {
    bottomLeft()
    gameWinMessage()
    tieGameMessage()
    turnIndicator()
    playerTurn()
    console.log(gameBoard)
  })
  $('#bottom').on('click', function () {
    bottom()
    gameWinMessage()
    tieGameMessage()
    turnIndicator()
    playerTurn()
    console.log(gameBoard)
  })
  $('#bottom-right').on('click', function () {
    bottomRight()
    gameWinMessage()
    tieGameMessage()
    turnIndicator()
    playerTurn()
    console.log(gameBoard)
  })
}

module.exports = {
  clickHandlers,
  gameWinner,
  turnIndicator
}
