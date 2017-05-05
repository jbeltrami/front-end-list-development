'use strict'

const store = require('../store.js')

const resetFields = function () {
  document.getElementById('sign-up').reset()
  document.getElementById('sign-in').reset()
  document.getElementById('changepw').reset()
  document.getElementById('sign-out').reset()
}

const signUpSuccess = (data) => {
  $('#auth-message').text('Thanks for signing up')
  $('.sign-in-screen').css('display', 'block')
  $('.sign-up-screen').hide()
  resetFields()
}

const signUpFailure = (data) => {
  $('#auth-message').text('Sign up didn\'t work')
  resetFields()
}

// makes all the buttons appear.
const signInSuccess = (data) => {
  resetFields()
  $('#auth-message').text('Thanks for signing in')
  $('.sign-in-screen').hide()
  $('.navbar').css('display', 'block')
  $('.wish-buttons').css('display', 'block')
  $('.sign-up-screen').hide()
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
}

const changePWFailure = (data) => {
  resetFields()
  console.log(data)
}

const signOutSuccess = (data) => {
  resetFields()
  $('.sign-in-screen').css('display', 'block')
  $('.navbar').hide()
  $('.wish-buttons').hide()
  $('.add-wish-screen').hide()
}

const signOutFailure = (data) => {
  resetFields()
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
  signOutFailure
}
