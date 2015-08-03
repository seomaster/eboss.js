class @CartController
  constructor: ->

  @addToCart: ->
    form = $("form[id='add_to_cart']")
    data = $(form).serialize()
    url = '/cart.json'
    $.ajax url,
      dataType: 'json'
      method: 'post'
      async: true
      data: data
      success: (data, status, jqXHR) ->
        CartHelper.plusOneCounterItems()
        CartHelper.openCartModal(CartTemplates.selectedVariation(data))
      error: (jqXHR, textStatus, errorThrow) ->
        console.log errorThrow

  @showCart: ->
    form = $("form[id='add_to_cart']")
    data = $(form).serialize()
    url = '/cart.json'
    $.ajax url,
      dataType: 'json'
      method: 'get'
      async: true
      data: data
      success: (response, status, jqXHR) ->
        CartHelper.updateCounterItems(response.number_of_items)
        CartHelper.showCart(CartTemplates.cartItems(response.line_items))
        CartHelper.updateSubTotal()
        cart = new CartHandler()
        cart.clickOnRemoveCartItem()
        cart.onScrollCart()
        cart.onlyNumbers()
        cart.onChangeQuantity()
        cart.onClickMinus()
        cart.onClickPlus()

  @updateCartCounter: ->
    form = $("form[id='add_to_cart']")
    data = $(form).serialize()
    url = '/cart.json'
    $.ajax url,
      dataType: 'json'
      method: 'get'
      async: true
      data: data
      success: (response, status, jqXHR) ->
        CartHelper.updateCounterItems(response.number_of_items)

  @removeCartItem: (variation_id) ->
    token = $("input[type='hidden'][name='authenticity_token']").val()
    data = 
      variation: variation_id
      authenticity_token : token
    $("div.panel div.loading").toggleClass('overlay')
    url = "/cart.json"
    $.ajax url,
      dataType: 'json'
      method: 'delete'
      async: true
      data: $.param(data)
      success: (response, status, jqXHR) ->
        CartHelper.removeCartItem(variation_id)
        CartHelper.updateCounterItems(response.number_of_items)
        $("div.panel div.loading").toggleClass('overlay')

  @updateVariationQuantityInCart: (variation_id, quantity) ->
    token = $("input[type='hidden'][name='authenticity_token']").val()
    data = 
      authenticity_token : token
      variation: variation_id
      quantity : quantity
    $("div.panel div.loading").toggleClass('overlay')
    url = "/cart.json"
    $.ajax url,
      dataType: 'json'
      method: 'put'
      async: true
      data: $.param(data)
      success: (response, status, jqXHR) ->
        $("div.panel div.loading").toggleClass('overlay')    
        