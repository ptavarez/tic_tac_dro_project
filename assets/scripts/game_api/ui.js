'use strict'

const store = require('../store')
const gameMove = ('../game_engine/game_events.js')

const createGameSuccess = function (data) {
  $('#please').text('Let\'s Play Some Tic-Tac-Dro ^.^')
  store.game = data.game
  $('table').show()
  $('#playerOne').show()
  $('#playerTwo').show()
  $('#get-game').show()
  $('.game-nav').show()
  $('p').show()
  $('.sign-in-success').hide()
  $('#signInSuccess-message').empty()
}

const updateGameSuccess = function (data) {
  $('#please').text('Game Updated Successfully')
  store.game.value = gameMove.currentPlayer
  store.game.over = false
}

const getGamesSuccess = function (data) {
  $('#please').text('You\'ve completed ' + data.games.length + ' games!')
}

module.exports = {
  createGameSuccess,
  updateGameSuccess,
  getGamesSuccess
}
