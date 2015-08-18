class @EbossCart
  constructor: ->
    new SelectVariationHandler()
    cart = new CartHandler()
    cart.clickOnCart()
    cart.clickOnAddToCart()
    cart.onDocumentReady()


class @EbossCartPage
  constructor: ->
    cart = new CartHandler()
    cart.clickOnRemoveCartItem()
    cart.onClickMinus()
    cart.onClickPlus()
    cart.onChangeQuantity()
    cart.onChangeTable()