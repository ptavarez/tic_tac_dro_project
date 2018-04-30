'use strict'

const gameApi = require('./api.js')
const gameUi = require('./ui.js')
const store = ('./../store.js')

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
  $('#create-game').on('click', onCreateGame)
  $('#get-game').on('click', onGetGames)
}

module.exports = {
  gameHandlers,
  onCreateGame
}
