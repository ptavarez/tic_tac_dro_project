'use strict'

const gameApi = require('./api.js')
const gameUi = require('./ui.js')
const store = ('./../store.js')
// const gameEngine = ('../game_engine/game_events.js')

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
  $('td').empty()
  gameApi.createGame(store)
    .then(gameUi.createGameSuccess)
}

const onGetGames = function (event) {
  event.preventDefault()
  gameApi.getGames()
    .then(gameUi.getGamesSuccess)
}

const gameHandlers = () => {
  $('#create-game').on('submit', onCreateGame)
  $('#get-game').on('submit', onGetGames)
}

module.exports = {
  gameHandlers,
  onCreateGame
}
