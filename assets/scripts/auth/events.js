const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  console.log('data is ', data)
  api.signUp(data)
    .then(function (data) {
      $('#signUp-message').text('Signed Up Successfully')
      $('#signUp-message').css('background-color', 'green')
      console.log(data)
    })
    .catch(function (error) {
      $('#signUp-message').text('Sign Up Error')
      $('#signUp-message').css('background-color', 'red')
      console.error(error)
    })
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  console.log('data is ', data)
  api.signIn(data)
    .then(function (data) {
      $('#signIn-message').text('Signed In Successfully')
      $('#signIn-message').css('background-color', 'green')
      console.log(data)
      store.user = data.user
    })
    .catch(function (error) {
      $('#signIn-message').text('Sign In Error')
      $('#signIn-message').css('background-color', 'red')
      console.error(error)
    })
}

const onChangePassword = function (event) {
  console.log('in on change password')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  console.log('just befre store.user')
  console.log(store.user.id + ' within event')
  api.changePassword(data)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(function () {
      $('#signOut-message').text('Signed Out Successfully')
      $('#sign-out').css('background-color', 'green')
    })
}

const addHandlers = () => {
  $('.sign-up-form').on('submit', onSignUp)
  $('.sign-in-form').on('submit', onSignIn)
  $('.change-password-form').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
