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

module.exports = {
  createGameSuccess,
  updateGameSuccess
}
