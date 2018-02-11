'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const addToBoard = require('./game_engine/game_events.js')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  authEvents.addHandlers()
})

$(() => {
  addToBoard.clickHandlers()
})

// $(() => {
//  addToBoard()
// })

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// Data attributes
// data-id = '3
// $('.cell').data
