'use strict'
const store = require('../store')

const signUpSuccess = data => {
  $('#notification').text('Signed Up Successfully!')
  $('#signUp-message').css('background-color', 'green')
  $('#signUp-message').css('color', 'black')
  $('#sign-up-modal').modal('hide')
  $('#signUp-message').empty()
  $('.sign-up-form').get(0).reset()
}

const signUpFailure = error => {
  $('#signUp-message').text('Sign Up Error')
  $('#signUp-message').css('background-color', 'red')
  $('#signUp-message').css('color', 'black')
  $('.sign-up-form').get(0).reset()
  console.error(error)
}

const signInSuccess = data => {
  $('#notification').text('Signed In Successfully!')
  $('#signIn-message').css('background-color', 'green')
  store.user = data.user
  $('#sign-in-modal').modal('hide')
  $('.main-page').hide()
  $('.main').show()
  $('table').hide()
  $('#messages').hide()
  $('#playerX').hide()
  $('#signIn-message').empty()
  $('#changePassword-message').empty()
  $('#signUp-message').empty()
  $('.sign-in-form').get(0).reset()
}

const signInFailure = error => {
  $('#signIn-message').text('The username/password you entered do not match. Please try again.')
  $('#signIn-message').css('background-color', 'red')
  $('#signIn-message').css('color', 'black')
  $('.sign-in-form').get(0).reset()
  console.error(error)
}

const changePasswordSuccess = data => {
  $('#notification').text('Changed Password Successfully!')
  $('#notification').css('color', 'green')
  $('#changePassword-message').empty()
  $('#change-password-modal').modal('hide')
  $('.change-password-form').get(0).reset()
}

const changePasswordFailure = error => {
  $('#changePassword-message').text('Password Change Unsuccessful')
  $('#changePassword-message').css('background-color', 'red')
  $('#changePassword-message').css('color', 'black')
  $('.change-password-form').get(0).reset()
  console.error(error)
}

const signOutSuccess = data => {
  $('#notification').text('Signed Out Successfully!')
  $('.main-page').show()
  $('.main').hide()
  $('table').hide()
  $('#get-game').hide()
}

const signOutFailure = error => {
  $('#notification').text('Already Signed Out')
  $('#notification').css('background-color', 'red')
  console.log(error)
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
