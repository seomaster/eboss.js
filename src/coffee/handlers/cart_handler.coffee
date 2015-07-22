class @CartHandler
  constructor: ->
    @clickOnCart()
    @clickOnAddToCart()

  clickOnCart: ->
    $('#shopping-cart').children().on 'click', (e) ->
      e.preventDefault()
      e.stopPropagation()
      CartController.showCart()

  clickOnAddToCart: ->
    $('a#buy-button').on 'click', (e) ->
      e.preventDefault()
      e.stopPropagation()
      CartController.addToCart()