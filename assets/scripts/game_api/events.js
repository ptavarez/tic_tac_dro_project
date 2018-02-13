'use strict'

const gameApi = require('./api.js')
const gameUi = require('./ui.js')
const store = ('./../store.js')

// Create Players
const playerOne = 'X'
const playerTwo = 'O'

// First player is always X
let currentPlayer = playerTwo

// Way of switching between playerOne and playerTwo
const playerTurn = function () {
  if (currentPlayer === playerOne) {
    currentPlayer = playerTwo
  } else {
    currentPlayer = playerOne
  }
}

const onCreateGame = function (event) {
  event.preventDefault()
  gameApi.createGame(store)
    .then(gameUi.createGameSuccess)
}

const onUpdateGame = function (event) {
  playerTurn()
  gameApi.updateGameMove($(this).data('cellIndex'), currentPlayer)
}

const gameHandlers = () => {
  $('#create-game').on('submit', onCreateGame)
  $('#top-left').one('click', onUpdateGame)
  $('#top').one('click', onUpdateGame)
  $('#top-right').one('click', onUpdateGame)
  $('#middle-left').one('click', onUpdateGame)
  $('#middle').one('click', onUpdateGame)
  $('#middle-right').one('click', onUpdateGame)
  $('#bottom-left').one('click', onUpdateGame)
  $('#bottom').one('click', onUpdateGame)
  $('#bottom-right').one('click', onUpdateGame)
}

module.exports = {
  gameHandlers,
  onCreateGame,
  onUpdateGame
}
