'use strict'

const {winningCombinations} = require('./helpers')
const {updateGameMove, updateGameStatus} = require('../game_api/api.js')
let {gameBoard, currentPlayer, moveCount} = require('./helpers')

const playerTurn = function () {
  currentPlayer === 'X' ? (() => {
    currentPlayer = 'O'
    $('#playerOne').empty()
    $('#playerTwo').text('Player O\'s Turn')
  })()
    : (() => {
      currentPlayer = 'X'
      $(`#playerTwo`).empty()
      $('#playerOne').text('Player X\'s Turn')
    })()
}

const gameOverStatus = () => {
  moveCount = null
  gameBoard = Array(9).fill(null)
  $('td').empty()
  $('.game-nav').hide()
  $('#playerOne').hide()
  $('#playerTwo').hide()
  $('table').hide()
  $('.sign-in-success').show()
}

const gameWinner = function () {
  let winningMessage
  moveCount++
  winningCombinations.forEach(combinations => {
    const [a, b, c] = combinations
    if (gameBoard[a] &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[a] === gameBoard[c]) {
      winningMessage = `Player ${gameBoard[a]} Wins`
      updateGameStatus()
      gameOverStatus()
    }
  })
  if (moveCount === 9 && !winningMessage) {
    updateGameStatus()
    gameOverStatus()
    return 'Tie Game'
  }
  return winningMessage
}

const gameWinMessage = function () {
  $('#notification').text(gameWinner())
}

const moveMade = function () {
  $('#notification').text('Move Made')
}

const onMove = square => {
  const index = $(square).attr('data-cell-index')
  if (!$(square).text()) {
    $(square).text(currentPlayer)
    gameBoard[index] = currentPlayer
    updateGameMove(index, currentPlayer)
  } else {
    moveMade()
    playerTurn()
  }
}

const clickHandlers = () => {
  $('#gameboard td').on('click', function () {
    onMove(this)
    gameWinMessage()
    playerTurn()
  })
}

module.exports = {
  clickHandlers,
  currentPlayer
}
