'use strict'
const store = require('../store')
const gameMove = ('../game_engine/logic.js')

const createGameSuccess = data => {
  $('#notification').text(`Let's Play Some Tic-Tac-Dro ^.^`)
  setTimeout(() => {
    $('#notification').text(`Player X's Turn`)
  }, 2000)
  store.game = data.game
  $('table').show()
  $('#get-game').show()
  $('.game-nav').show()
  $('p').show()
  $('.sign-in-success').hide()
}

const updateGameSuccess = data => {
  $('#notification').text('Game Updated Successfully')
  store.game.value = gameMove.currentPlayer
  store.game.over = false
}

const getGamesSuccess = data => {
  $('#notification').text('You\'ve completed ' + data.games.length + ' games!')
}

module.exports = {
  createGameSuccess,
  updateGameSuccess,
  getGamesSuccess
}
