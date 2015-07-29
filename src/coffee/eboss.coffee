class @Eboss
  constructor: ->
    new SelectVariationHandler()
    cart = new CartHandler()
    cart.clickOnCart()
    cart.clickOnAddToCart()
    cart.onDocumentReady()
