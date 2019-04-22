'use strict'
const { notificationId, notificationTimeout } = require('../helpers')

const playTurnUi = currentPlayer => {
  $(notificationId).text(`Player ${currentPlayer}'s Turn`)
}

const clearNotifications = () => {
  $(notificationId).empty()
}

const endGame = () => {
  $('td').empty()
  $('.gameboard').hide()
  $('.main').show()
}

const gameWinMessage = winner => {
  if (winner) {
    $(notificationId).text(winner)
    notificationTimeout(notificationId)
  }
}

const moveMade = () => {
  $(notificationId).text('Move Made')
  notificationTimeout(notificationId)
}

module.exports = {
  playTurnUi,
  clearNotifications,
  endGame,
  moveMade,
  gameWinMessage
}
