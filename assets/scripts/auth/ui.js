'use strict'

const store = require('../store.js')

const api = require('./api.js')

const getWishesTable = require('../templates/get-wishes.handlebars')
const getSingleWish = require('../templates/get-single-wish.handlebars')

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
  $('#wishes-content').text('Sign up didn\'t work. Make sure your passwords match')
  $('#wishes-content').css('display', 'block')
  resetFields()
}

// makes all the buttons appear.
const signInSuccess = (data) => {
  resetFields()
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
  $('#wishes-content').text('Sign in didn\'t work. Make sure your username and password match')
  $('#wishes-content').css('display', 'block')
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
  $('#wishes-content').css('display', 'block')
  $('#wishes-content').text('Please provide a different combination.')
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
  $('#wishes-content').css('display', 'block')
  $('#wishes-content').text('Welcome to your wish list! To proceed, please sign-up or sign-in if you already have an account.')
}

const signOutFailure = (data) => {
  resetFields()
  console.log(data)
}

const createWishSuccess = (data) => {
  $('#wishes-content').empty()
  $('#wishes-content').text('You just create a new wish!')
  resetFields()
}
const createWishFailure = (data) => {
  $('#wishes-content').text('Oops! something went wrong! Could you try again?')
  resetFields()
}

const getWishesSuccess = (data) => {
  resetFields()
  $('#wishes-content').empty()
  const indexWishes = getWishesTable({
    wishes: data.wishes
  })
  $('#wishes-content').append(indexWishes)
  $('.destroy-wish').on('click', function () {
    $(this).parent().parent().css({
      'display': 'none'
    })
    api.deleteWish(this.dataset.id)
  })

  $('.update-wish').on('click', function () {
    $('.change-wish-screen').css('display', 'block')
    $('.add-wish-screen').hide()
    $('.read-one-wish').hide()
    $('.delete-wish-screen').hide()
  })
}

const getWishesFailure = (data) => {
  resetFields()
  $('#wishes-content').text('Oops! something went wrong! Make sure you\'re connected to the internet ')
}

const getWishSuccess = (data) => {
  resetFields()
  $('#wishes-content').empty()
  $('.read-one-wish').css('display', 'none')
  const indexWishes = getSingleWish({
    wish: data.wish
  })
  $('#wishes-content').append(indexWishes)
  $('.destroy-wish').on('click', function () {
    $(this).parent().parent().css({
      'display': 'none'
    })
    api.deleteWish(this.dataset.id)
  })

  $('.update-wish').on('click', function () {
    $('.change-wish-screen').css('display', 'block')
    $('.add-wish-screen').hide()
    $('.read-one-wish').hide()
    $('.delete-wish-screen').hide()
  })
}

const getWishFailure = (data) => {
  resetFields()
  $('#wishes-content').text("Try another number! Make sure to hit 'See your wishes' first")
}

const updateWishSuccess = (data) => {
  resetFields()
  $('#wishes-content').empty()
  $('.change-wish-screen').hide()
  $('#wishes-content').text('You just updated your wish!')
}
const updateWishFailure = (data) => {
  resetFields()
  $('#wishes-content').text('Make sure you have the correct wish number to update.')
}

const deleteWishSuccess = (data) => {
  resetFields()
  $('#wishes-content').text('Wish deleted')
}
const deleteWishFailure = (data) => {
  resetFields()
  $('#wishes-content').text('Deletion didn\'t go well! Try again.')
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
