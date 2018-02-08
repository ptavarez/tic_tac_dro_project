'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// Create Players
const playerOne = 'X'
const playerTwo = 'O'

// Empty Game Board
const emptyBoard = ['', '', '', '', '', '', '', '', '']

// Way of adding to specific index
const addToBoard = function (index, player) {
// Can not choose occupied spot
  if (emptyBoard[index] === 'X' || emptyBoard[index] === 'O') {
    return 'Sorry, this move has been made!'
  }
  emptyBoard[index] = player
  console.log(emptyBoard)
}

// Current player
let currentPlayer = playerOne

// Way of switching between playerOne and playerTwo
const playerTurn = function () {
  if (currentPlayer === playerOne) {
    currentPlayer = playerTwo
  } else {
    currentPlayer = playerOne
  }
}

// TODO Check for a winner
