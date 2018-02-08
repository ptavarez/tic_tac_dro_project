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

const addHandlers = () => {
  $('.form-inline').on('submit', onSignUp)
}

module.exports = {
  addHandlers
}
