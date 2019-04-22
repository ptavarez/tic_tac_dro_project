'use strict'
const store = require('../store')
const {
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
} = require('../helpers')

const signUpSuccess = data => {
  $(notificationId).text('Signed Up Successfully!')
  hideModal(signUpModal)
  $(signUpFormClass).get(0).reset()
  notificationTimeout(notificationId)
}

const signUpFailure = error => {
  $(signUpMessageId).text('Sign Up Error')
  $(signUpMessageId).css('background-color', 'red')
  $(signUpMessageId).css('color', 'black')
  resetForm(signUpFormClass)
  notificationTimeout(signUpMessageId)
  return error
}

const signInSuccess = data => {
  store.user = data.user
  hideModal(signInModal)
  resetForm(signInFormClass)
  $('.sign-in-page').hide()
  $('.main').show()
}

const signInFailure = error => {
  $(signInMessageId).text('The username/password you entered do not match. Please try again.')
  $(signInMessageId).css('background-color', 'red')
  $(signInMessageId).css('color', 'black')
  resetForm(signInFormClass)
  notificationTimeout(signInMessageId)
  return error
}

const signOutSuccess = data => {
  notificationTimeout(notificationId)
  $('.main').hide()
  $('.sign-in-page').show()
}

const signOutFailure = error => {
  $(notificationId).text('Already Signed Out')
  $(notificationId).css('background-color', 'red')
  notificationTimeout(notificationId)
  return error
}

const changePasswordSuccess = data => {
  $(notificationId).text('Changed Password Successfully!')
  $(notificationId).css('color', 'green')
  notificationTimeout(notificationId)
  hideModal(changePasswordModal)
  resetForm(changePasswordForm)
}

const changePasswordFailure = error => {
  $(changePasswordMessageId).text('Password Change Unsuccessful')
  $(changePasswordMessageId).css('background-color', 'red')
  $(changePasswordMessageId).css('color', 'black')
  notificationTimeout(changePasswordMessageId)
  resetForm(changePasswordForm)
  return error
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
