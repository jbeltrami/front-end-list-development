'use strict'

const store = require('../store.js')

const getWishesTable = require('../get-wishes.handlebars')

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
  // $('#wishes-content').text('Thanks for signing up')
  $('.sign-in-screen').css('display', 'block')
  $('.sign-up-screen').hide()
  resetFields()
}

const signUpFailure = (data) => {
  // $('#wishes-content').text('Sign up didn\'t work')
  resetFields()
}

// makes all the buttons appear.
const signInSuccess = (data) => {
  resetFields()
  // $('#wishes-content').text('Thanks for signing in')
  $('.sign-in-screen').hide()
  $('.navbar').css('display', 'block')
  $('.wish-buttons').css('display', 'block')
  $('.sign-up-screen').hide()
  $('#wishes-content').css('display', 'block')
  $('#wishes-content').text('Welcome! Make a wish!')
  // store the user object
  store.user = data.user
}

const signInFailure = (data) => {
  // $('#wishes-content').text('Sign in didn\'t work')
  resetFields()
}

const changePWSuccess = (data) => {
  resetFields()
  $('.change-pass-screen').hide()
  $('.wish-buttons').css('display', 'block')
  $('#wishes-content').css('display', 'block')
  $('#wishes-content').text('Your password has been changed.')
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
  $('#wishes-content').hide()
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
  $('#wishes-content').empty()
  const indexWishes = getWishesTable({ wishes: data.wishes })
  $('#wishes-content').append(indexWishes)
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
