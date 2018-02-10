const store = require('../store')

// TODO find a way to have to modal disappear after success

const signUpSuccess = function (data) {
  $('#signUp-message').text('Signed Up Successfully')
  $('#signUp-message').css('background-color', 'green')
  console.log(data)
}

const signUpFailure = function (error) {
  $('#signUp-message').text('Sign Up Error')
  $('#signUp-message').css('background-color', 'red')
  console.error(error)
}
// TODO find a way of reloading modal without reloading page

const signInSuccess = function (data) {
  $('#signIn-message').text('Signed In Successfully')
  $('#signIn-message').css('background-color', 'green')
  console.log(data)
  store.user = data.user
  // $('div').toggle(500)
  // $('table').toggle(1000)
}

const signInFailure = function (error) {
  $('#signIn-message').text('The username/password you entered do not match. Please try again.')
  $('#signIn-message').css('background-color', 'red')
  console.error(error)
}

const changePasswordSuccess = function (data) {
  $('#changePassword-message').text('Changed Password Successfully')
  $('#changePassword-message').css('background-color', 'green')
}

const changePasswordFailure = function (error) {
  $('#changePassword-message').text('Password Change Unsuccessful')
  $('#changePassword-message').css('background-color', 'red')
  console.error(error)
}

const signOutSuccess = function (data) {
  $('#signOut-message').text('Signed Out Successfully')
  $('#signOut-message').css('background-color', 'green')
  $('#signOut-message').toggle()
  // $('div').toggle()
  // $('table').toggle()
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
