'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const addToBoard = require('./game_engine/logic.js')
const gameEvents = require('./game_api/events.js')

$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
  addToBoard.clickHandlers()
  gameEvents.gameHandlers()
})
