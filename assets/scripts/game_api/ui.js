'use strict'
const store = require('../store')
const { notificationId } = require('../helpers')

const createGameSuccess = data => {
  $(notificationId).text(`Let's Play Some Tic-Tac-Dro ^.^`)
  store.game = data.game
  $('.gameboard').show()
  $('.main').hide()
}

const getGamesSuccess = data => {
  $(notificationId).text('You\'ve completed ' + data.games.length + ' games!')
}

module.exports = {
  createGameSuccess,
  getGamesSuccess
}
