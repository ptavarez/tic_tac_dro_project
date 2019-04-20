'use strict'
const { updateGameMove, updateGameStatus } = require('../game_api/api.js')
const {
  playTurnUi,
  clearNotifications,
  endGame,
  moveMade,
  gameWinMessage
} = require('./ui.js')
const {
  winningCombinations,
  playerX,
  playerO,
  newBoard
} = require('./helpers')

let gameBoard = newBoard
let currentPlayer = playerX
let moveCount = null

const playerTurn = () => {
  currentPlayer === playerX ? (() => {
    currentPlayer = playerO
    playTurnUi(currentPlayer)
  })()
    : (() => {
      currentPlayer = playerX
      playTurnUi(currentPlayer)
    })()
}

const gameOverStatus = () => {
  moveCount = null
  clearNotifications()
  gameBoard = newBoard
  endGame()
}

const gameWinner = () => {
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

const onMove = square => {
  const index = $(square).attr('data-cell-index')
  if (!$(square).text()) {
    $(square).text(currentPlayer)
    gameBoard[index] = currentPlayer
    updateGameMove(index, currentPlayer)
  } else {
    moveMade()
    playerTurn()
    moveCount--
  }
}

const clickHandlers = () => {
  $('#gameboard td').on('click', function () {
    onMove(this)
    playerTurn()
    gameWinMessage(gameWinner)
  })
}

module.exports = {
  clickHandlers,
  currentPlayer
}
