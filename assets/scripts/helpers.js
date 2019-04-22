'use strict'
const playerX = 'X'
const playerO = 'O'
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
const newBoard = Array(9).fill(null)

const notificationId = '#notification'
const signUpMessageId = '#signUp-message'
const signUpFormClass = '.sign-up-form'
const signUpModal = '#sign-up-modal'
const signInMessageId = '#signIn-message'
const signInFormClass = '.sign-in-form'
const signInModal = '#sign-in-modal'
const changePasswordModal = '#change-password-modal'
const changePasswordForm = '.change-password-form'
const changePasswordMessageId = '#changePassword-message'

const notificationTimeout = textArea => {
  setTimeout(() => {
    $(`${textArea}`).empty()
  }, 3000)
}
const hideModal = modalUp => $(modalUp).modal('hide')
const resetForm = form => $(form).get(0).reset()

module.exports = {
  playerX,
  playerO,
  winningCombinations,
  newBoard,
  notificationId,
  signUpMessageId,
  signUpFormClass,
  signUpModal,
  signInMessageId,
  signInFormClass,
  signInModal,
  changePasswordModal,
  changePasswordForm,
  changePasswordMessageId,
  notificationTimeout,
  hideModal,
  resetForm
}
