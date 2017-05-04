'use strict'

const store = require('../store.js')

const resetFields = function () {
  document.getElementById('sign-up').reset()
  document.getElementById('sign-in').reset()
  document.getElementById('changepw').reset()
  document.getElementById('sign-out').reset()
}

const signUpSuccess = (data) => {
  console.log(data)
  $('#auth-message').text('Thanks for signing up')
  resetFields()
}

const signUpFailure = (data) => {
  console.log(data)
  $('#auth-message').text('Sign up didn\'t work')
  resetFields()
}

// makes all the buttons appear.
const signInSuccess = (data) => {
  console.log(data)
  $('#auth-message').text('Thanks for signing in')
  resetFields()
  // store the user object
  store.user = data.user
}

const signInFailure = (data) => {
  $('#auth-message').text('Sign in didn\'t work')
  resetFields()
  console.log(data)
}

const changePWSuccess = (data) => {
  resetFields()
  console.log(data)
}

const changePWFailure = (data) => {
  resetFields()
  console.log(data)
}

const signOutSuccess = (data) => {
  resetFields()
  console.log(data)
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