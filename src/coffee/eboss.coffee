# Cart for product's page
class @EbossCart
  constructor: () ->
    new I18n()
    new SelectVariationHandler()
    cart = new CartHandler()
    cart.clickOnCart()
    cart.clickOnAddToCart()
    cart.onDocumentReady()

# Cart for cart's page
class @EbossCartPage
  constructor: () ->
    new I18n()
    cart = new CartHandler()
    cart.clickOnRemoveCartItem()
    cart.onClickMinus()
    cart.onClickPlus()
    cart.onChangeQuantity()
    cart.onChangeTable()

# Cart for checkout's page
class @EbossCartCheckout
  constructor: () ->
    new I18n()
    cart = new CartHandler()
    cart.onCheckoutDocumentReady()
    cart.clickOnEditCart()
    