'use strict'

const store = require('../store')
const gameMove = ('../game_engine/events.js')

const createGameSuccess = function (data) {
  $('#notification').text('Let\'s Play Some Tic-Tac-Dro ^.^')
  store.game = data.game
  $('table').show()
  $('#playerOne').show()
  $('#playerTwo').show()
  $('#get-game').show()
  $('.game-nav').show()
  $('p').show()
  $('.sign-in-success').hide()
}

const updateGameSuccess = function (data) {
  $('#notification').text('Game Updated Successfully')
  store.game.value = gameMove.currentPlayer
  store.game.over = false
}

const getGamesSuccess = function (data) {
  $('#notification').text('You\'ve completed ' + data.games.length + ' games!')
}

module.exports = {
  createGameSuccess,
  updateGameSuccess,
  getGamesSuccess
}
