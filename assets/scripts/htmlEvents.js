'use strict'

const addHandlers = () => {
  // Brings the change pass div up
  $('.change-pass').on('click', function () {
    $('.change-pass-screen').css('display', 'block')
    $('.wish-buttons').hide()
  })

  $('.add-wish').on('click', function () {
    $('.add-wish-screen').css('display', 'block')
    $('.wish-buttons').hide()
  })

  $('.create-account').on('click', function () {
    $('.sign-in-screen').hide()
    $('.sign-up-screen').css('display', 'block')
  })

// make sure to comment this out when API request is set up to create-wish
  $('.create-wish-button').on('click', function () {
    $('.add-wish-screen').hide()
    $('.wish-buttons').css('display', 'block')
  })
}

module.exports = {
  addHandlers
}
