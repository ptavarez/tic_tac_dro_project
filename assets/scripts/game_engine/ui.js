'use strict'
const playTurnUi = currentPlayer => {
  $('#notification').text(`Player ${currentPlayer}'s Turn`)
}

const clearNotifications = () => {
  $('#notification').empty()
}

const endGame = () => {
  $('td').empty()
  $('.game-nav').hide()
  $('table').hide()
  $('.sign-in-success').show()
}

const gameWinMessage = winner => {
  $('#notification').text(winner)
}

const moveMade = function () {
  $('#notification').text('Move Made')
}

module.exports = {
  playTurnUi,
  clearNotifications,
  endGame,
  moveMade,
  gameWinMessage
}
