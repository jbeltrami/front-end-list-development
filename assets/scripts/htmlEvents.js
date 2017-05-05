'use strict'

const addHandlers = () => {
  $('.change-pass').on('click', function () {
    $('.change-pass-screen').css('display', 'block')
  })
}

module.exports = {
  addHandlers
}
