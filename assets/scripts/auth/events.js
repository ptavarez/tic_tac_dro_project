const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')

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
    })
    .catch(function (error) {
      $('#signIn-message').text('Sign In Error')
      $('#signIn-message').css('background-color', 'red')
      console.error(error)
    })
}

const addHandlers = () => {
  $('.sign-up-form').on('submit', onSignUp)
  $('.sign-in-form').on('submit', onSignIn)
}

module.exports = {
  addHandlers
}
