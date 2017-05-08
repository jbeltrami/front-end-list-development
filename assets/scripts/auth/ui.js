'use strict'

const store = require('../store.js')

const resetFields = function () {
  document.getElementById('sign-up').reset()
  document.getElementById('sign-in').reset()
  document.getElementById('changepw').reset()
  document.getElementById('sign-out').reset()
  document.getElementById('create-wish').reset()
  document.getElementById('get-wish').reset()
  document.getElementById('update-wish').reset()
  document.getElementById('destroy-wish').reset()
}

const signUpSuccess = (data) => {
  // $('#auth-message').text('Thanks for signing up')
  $('.sign-in-screen').css('display', 'block')
  $('.sign-up-screen').hide()
  resetFields()
}

const signUpFailure = (data) => {
  // $('#auth-message').text('Sign up didn\'t work')
  resetFields()
}

// makes all the buttons appear.
const signInSuccess = (data) => {
  resetFields()
  // $('#auth-message').text('Thanks for signing in')
  $('.sign-in-screen').hide()
  $('.navbar').css('display', 'block')
  $('.wish-buttons').css('display', 'block')
  $('.sign-up-screen').hide()
  $('#auth-message').css('display', 'block')
  $('#auth-message').text('Welcome! Make a wish!')
  // store the user object
  store.user = data.user
}

const signInFailure = (data) => {
  // $('#auth-message').text('Sign in didn\'t work')
  resetFields()
}

const changePWSuccess = (data) => {
  resetFields()
  $('.change-pass-screen').hide()
  $('.wish-buttons').css('display', 'block')
  $('#auth-message').css('display', 'block')
  $('#auth-message').text('Your password has been changed.')
}

const changePWFailure = (data) => {
  resetFields()
  console.log(data)
}

const signOutSuccess = (data) => {
  resetFields()
  $('.sign-in-screen').css('display', 'block')
  $('.navbar').hide()
  $('.change-pass-screen').hide()
  $('.wish-buttons').hide()
  $('.add-wish-screen').hide()
  $('.read-one-wish').hide()
  $('.change-wish-screen').hide()
  $('.delete-wish-screen').hide()
  $('#auth-message').hide()
}

const signOutFailure = (data) => {
  resetFields()
  console.log(data)
}

const createWishSuccess = (data) => {
  console.log(data)
}
const createWishFailure = (data) => {
  console.log(data)
}

const getWishesSuccess = (data) => {
  console.log(data)
}
const getWishesFailure = (data) => {
  console.log(data)
}

const getWishSuccess = (data) => {
  console.log(data)
}
const getWishFailure = (data) => {
  console.log(data)
}

const updateWishSuccess = (data) => {
  console.log(data)
}
const updateWishFailure = (data) => {
  console.log(data)
}

const deleteWishSuccess = (data) => {
  console.log(data)
}
const deleteWishFailure = (data) => {
  console.log(data)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePWSuccess,
  changePWFailure,
  signOutSuccess,
  signOutFailure,
  createWishSuccess,
  createWishFailure,
  getWishesSuccess,
  getWishesFailure,
  getWishSuccess,
  getWishFailure,
  updateWishSuccess,
  updateWishFailure,
  deleteWishSuccess,
  deleteWishFailure
}
