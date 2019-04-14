'use strict'

const currentPlayer = 'X'
const gameBoard = Array(9).fill(null)
const moveCount = null
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

module.exports = {
  currentPlayer,
  gameBoard,
  moveCount,
  winningCombinations
}
