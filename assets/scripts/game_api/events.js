'use strict'
const { createGame, getGames } = require('./api.js')
const { createGameSuccess, getGamesSuccess } = require('./ui.js')

const onCreateGame = event => {
  event.preventDefault()
  $('td').empty()
  createGame()
    .then(createGameSuccess)
}

const onGetGames = event => {
  event.preventDefault()
  getGames()
    .then(getGamesSuccess)
}

const gameHandlers = () => {
  $('#create-game').on('click', onCreateGame)
  $('#get-game').on('click', onGetGames)
}

module.exports = {
  gameHandlers,
  onCreateGame
}
