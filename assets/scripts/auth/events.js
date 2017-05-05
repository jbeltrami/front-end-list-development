'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePW = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.changePW(data)
    .then(ui.changePWSuccess)
    .catch(ui.changePWFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreateWish = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.createWish(data)
    .then(ui.createWishSuccess)
    .catch(ui.createWishFailure)
}

const onGetWishes = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.getWishes(data)
    .then(ui.getWishesSuccess)
    .catch(ui.getWishesFailure)
}

const onGetWish = function (event) {
  const data = getFormFields(event.target)
  console.log(data.wishes.id)
  event.preventDefault()
  api.getWish(data.wishes.id)
    .then(ui.getWishSuccess)
    .catch(ui.getWishFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#changepw').on('submit', onChangePW)
  $('#sign-out').on('submit', onSignOut)
  $('#create-wish').on('submit', onCreateWish)
  $('#get-wishes').on('click', onGetWishes)
  $('#get-wish').on('submit', onGetWish)
}

module.exports = {
  addHandlers
}
