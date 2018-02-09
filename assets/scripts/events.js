'use strict'
// const addToBoard = require('./game_logic')

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

const gameBoard = ['', '', '', '', '', '', '', '', '']

// Way of not being able to click on occupied spotChecker
// Click Handler

const clickHandlers = () => {
  $('#top-left').on('click', function () {
    $('#top-left').text(currentPlayer)
    gameBoard.splice(0, 1, currentPlayer)
    playerTurn()
    console.log(gameBoard)
  })
  $('#top').on('click', function () {
    $('#top').text(currentPlayer)
    gameBoard.splice(1, 1, currentPlayer)
    playerTurn()
    console.log(gameBoard)
  })
  $('#top-right').on('click', function () {
    $('#top-right').text(currentPlayer)
    gameBoard.splice(2, 1, currentPlayer)
    playerTurn()
    console.log(gameBoard)
  })
  $('#middle-left').on('click', function () {
    $('#middle-left').text(currentPlayer)
    gameBoard.splice(3, 1, currentPlayer)
    playerTurn()
    console.log(gameBoard)
  })
  $('#middle').on('click', function () {
    $('#middle').text(currentPlayer)
    gameBoard.splice(4, 1, currentPlayer)
    playerTurn()
    console.log(gameBoard)
  })
  $('#middle-right').on('click', function () {
    $('#middle-right').text(currentPlayer)
    gameBoard.splice(5, 1, currentPlayer)
    playerTurn()
    console.log(gameBoard)
  })
  $('#bottom-left').on('click', function () {
    $('#bottom-left').text(currentPlayer)
    gameBoard.splice(6, 1, currentPlayer)
    playerTurn()
    console.log(gameBoard)
  })
  $('#bottom').on('click', function () {
    $('#bottom').text(currentPlayer)
    gameBoard.splice(7, 1, currentPlayer)
    playerTurn()
    console.log(gameBoard)
  })
  $('#bottom-right').on('click', function () {
    $('#bottom-right').text(currentPlayer)
    gameBoard.splice(8, 1, currentPlayer)
    playerTurn()
    console.log(gameBoard)
  })
}

module.exports = {
  clickHandlers
}
