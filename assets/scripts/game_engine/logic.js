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
} = require('../helpers')

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
  endGame()
  moveCount = null
  clearNotifications()
  gameBoard = newBoard
}

const gameWinner = () => {
  let winningMessage
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
    playerTurn()
  } else {
    moveMade()
    moveCount--
    setTimeout(() => {
      playTurnUi(currentPlayer)
    }, 3000)
  }
}

const clickHandlers = () => {
  $('#gameboard td').on('click', function () {
    moveCount++
    onMove(this)
    if (moveCount > 4) {
      gameWinMessage(gameWinner())
    }
  })
  $('#quit-game').on('click', () => {
    updateGameStatus()
    gameOverStatus()
  })
}

module.exports = {
  clickHandlers,
  currentPlayer
}
