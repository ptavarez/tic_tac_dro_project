const store = require('../store')

// TODO find a way to have to modal disappear after success

const signUpSuccess = function (data) {
  $('#signUpSuccess-message').text('Signed Up Successfully!')
  $('#signUp-message').css('background-color', 'green')
  $('#signUp-message').css('color', 'black')
  $('#sign-up-modal').modal('hide')
  $('#signOut-message').empty()
  $('#signUp-message').empty()
  $('.sign-up-form').get(0).reset()
}

const signUpFailure = function (error) {
  $('#signUp-message').text('Sign Up Error')
  $('#signUp-message').css('background-color', 'red')
  $('#signUp-message').css('color', 'black')
  $('.sign-up-form').get(0).reset()
  console.error(error)
}
// TODO find a way of reloading modal without reloading page

const signInSuccess = function (data) {
  $('#signInSuccess-message').text('Signed In Successfully!')
  $('#signIn-message').css('background-color', 'green')
  store.user = data.user
  $('#sign-in-modal').modal('hide')
  $('.main-page').hide()
  $('.main').show()
  $('table').hide()
  $('#messages').hide()
  $('#playerOne').hide()
  $('#signOut-message').empty()
  $('#signIn-message').empty()
  $('#changePassword-message').empty()
  $('#signUp-message').empty()
  $('#signUpSuccess-message').empty()
  $('.sign-in-form').get(0).reset()
}

const signInFailure = function (error) {
  $('#signIn-message').text('The username/password you entered do not match. Please try again.')
  $('#signIn-message').css('background-color', 'red')
  $('#signIn-message').css('color', 'black')
  $('.sign-in-form').get(0).reset()
  console.error(error)
}

const changePasswordSuccess = function (data) {
  $('#changePasswordSuccess-message').text('Changed Password Successfully!')
  $('#changePassword-message').css('color', 'green')
  $('#signInSuccess-message').empty()
  $('#signOut-message').empty()
  $('#changePassword-message').empty()
  $('#change-password-modal').modal('hide')
  $('.change-password-form').get(0).reset()
}

const changePasswordFailure = function (error) {
  $('#changePassword-message').text('Password Change Unsuccessful')
  $('#changePassword-message').css('background-color', 'red')
  $('#changePassword-message').css('color', 'black')
  $('.change-password-form').get(0).reset()
  console.error(error)
}

const signOutSuccess = function (data) {
  $('#signOut-message').text('Signed Out Successfully!')
  $('.main-page').show()
  $('.main').hide()
  $('table').hide()
  // $('p').hide()
  $('#get-game').hide()
  $('#please').empty()
  $('#signInSuccess-message').empty()
  $('#changePasswordSuccess-message').empty()
}

const signOutFailure = function (error) {
  $('#signOut-message').text('Already Signed Out')
  $('#signOut-message').css('background-color', 'red')
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
