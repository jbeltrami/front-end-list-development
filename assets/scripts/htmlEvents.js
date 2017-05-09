'use strict'

// const hideScreens = function () {
//   $('.add-wish-screen').hide()
//   $('.read-one-wish').hide()
//   $('.change-wish-screen').hide()
//   $('.delete-wish-screen').hide()
//   $('.change-pass-screen').hide()
// }

// const resetInputs = function () {
//   document.getElementByTagName('input').reset()
// }

const addHandlers = () => {
  $('.create-account').on('click', function () {
    $('.sign-in-screen').hide()
    $('#wishes-content').text('You can create your account by typing a username and a password. Make sure that you passwords match.')
    $('.sign-up-screen').css('display', 'block')
  })

  $('.back-to-menu-buttons').on('click', function () {
    $('.change-pass-screen').hide()
    $('.wish-buttons').css('display', 'block')
    $('#wishes-content').css('display', 'block')
  })

  $('.back-to-menu').on('click', function () {
    $('.sign-up-screen').hide()
    $('#wishes-content').text('Welcome to your wish list! To proceed, please sign-up or sign-in if you already have an account.')
    $('.sign-in-screen').css('display', 'block')
  })

  $('.add-wish').on('click', function () {
    $('.add-wish-screen').css('display', 'block')
    $('.read-one-wish').hide()
    $('.change-wish-screen').hide()
    $('.delete-wish-screen').hide()
    $('#wishes-content').text('Writing down a wish is the best way to start accomplishing it')
  })

  $('.read-wish').on('click', function () {
    $('.read-one-wish').css('display', 'block')
    $('.add-wish-screen').hide()
    $('.change-wish-screen').hide()
    $('.delete-wish-screen').hide()
    $('#wishes-content').text('It is always good to remember what you wish for, is it not?')
  })

  // $('.change-wish').on('click', function () {
  //   $('.change-wish-screen').css('display', 'block')
  //   $('.add-wish-screen').hide()
  //   $('.read-one-wish').hide()
  //   $('.delete-wish-screen').hide()
  // })

  // $('.delete-wish').on('click', function () {
  //   $('.delete-wish-screen').css('display', 'block')
  //   $('.add-wish-screen').hide()
  //   $('.read-one-wish').hide()
  //   $('.change-wish-screen').hide()
  // })

  $('.change-pass').on('click', function () {
    $('#wishes-content').hide()
    $('.wish-buttons').hide()
    $('.add-wish-screen').hide()
    $('.read-one-wish').hide()
    $('.change-wish-screen').hide()
    $('.delete-wish-screen').hide()
    $('.change-pass-screen').css('display', 'block')
  })
}

module.exports = {
  addHandlers
}

/*  // Brings the change pass div up
  $('.change-pass').on('click', function () {
    $('.change-pass-screen').css('display', 'block')
    $('.wish-buttons').hide()
  })

  $('.back-to-menu').on('click', function () {
    hideScreens()
  })

  $('.add-wish').on('click', function () {
    $('.add-wish-screen').css('display', 'block')

  })

  $('.read-wish').on('click', function () {
    $('.read-one-wish').css('display', 'block')

  })

// make sure to comment this out when UI is done
  $('.read-wish-button').on('click', function () {
    $('.read-one-wish').hide()
    $('.wish-buttons').css('display', 'block')
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

  $('.change-wish').on('click', function () {
    $('.change-wish-screen').css('display', 'block')
    // $('.wish-buttons').hide()
  })

// make sure to comment this out when UI is done
  $('.update-wish-button').on('click', function () {
    $('.change-wish-screen').hide()
    $('.wish-buttons').css('display', 'block')
  })
}

$('.delete-wish').on('click', function () {
  $('.delete-wish-screen').css('display', 'block')
  // $('.wish-buttons').hide()
})

// make sure to comment this out when UI is done
$('.delete-wish-button').on('click', function () {
  $('.delete-wish-screen').hide()
  // $('.wish-buttons').css('display', 'block')
})
*/
