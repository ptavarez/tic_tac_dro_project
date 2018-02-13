'use strict'

const store = require('../store')
const gameMove = ('../game_engine/game_events.js')

const createGameSuccess = function (data) {
  $('#please').text('Game Created Successfully')
  store.game = data.game
  console.log(store.game)
}

const updateGameSuccess = function (data) {
  console.log(data)
  $('#please').text('Game Updated Successfully')
  store.game.value = gameMove.currentPlayer
  store.game.over = false
}

const getGamesSuccess = function (data) {
  console.log(data.games.length)
  $('#please').text('You\'ve completed ' + data.games.length + ' games!')
}

module.exports = {
  createGameSuccess,
  updateGameSuccess,
  getGamesSuccess
}
