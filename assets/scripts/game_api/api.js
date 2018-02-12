'use strict'

const config = require('../config')
const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')

const createGame = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const createGameSuccess = function (data) {
  $('#please').text('Game Created Successfully')
  console.log(data)
  store.game = data.game
}

const onCreateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  createGame(data)
    .then(createGameSuccess)
}

const gameHandlers = () => {
  $('#create-game').on('submit', onCreateGame)
}

module.exports = {
  createGame,
  gameHandlers
}
