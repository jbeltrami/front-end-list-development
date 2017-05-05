'use strict'

const addHandlers = () => {
  $('.change-pass').on('click', function () {
    $('.change-pass-screen').css('display', 'block')
  })
  $('.add-wish').on('click', function () {
    $('.add-wish-screen').css('display', 'block')
  })
  $('#create-list').on('click', function () {
    $('.add-wish-screen').hide()
  })
}

module.exports = {
  addHandlers
}
