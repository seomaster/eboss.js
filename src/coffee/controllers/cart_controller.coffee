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

  @showEditCart: ->
    token = $("input[type='hidden'][name='authenticity_token']").val()
    if not token
      token = $("meta[name='csrf-token']").attr('content')
    data = 
      authenticity_token : token
    url = '/cart.json'
    $.ajax url,
      dataType: 'json'
      method: 'get'
      async: true
      data: data
      success: (response, status, jqXHR) ->
        CartHelper.openCartModal(CartTemplates.editCartItems(response.line_items))
          .on('shown.bs.modal', ->
            CartHelper.updateSubTotal() 
            cart = new CartHandler()
            cart.clickOnRemoveCartItem()
            cart.onScrollCart()
            cart.onlyNumbers()
            cart.onChangeQuantity()
            cart.onClickMinus()
            cart.onClickPlus()
          )
          .on('hide.bs.modal',  ->
            CartController.updateSummaryCart()
          )
          .on('hidden.bs.modal', ->
            CartHelper.alertCartItems()
            $("#shopping_cart_modal").remove()
            $("#edit-cart").removeAttr('disabled')
            handler = new CartHandler()
            handler.clickResponsiveCartOnCheckout()
          )

  @updateCartCounter: ->
    form = $("form[id='add_to_cart']")
    if form
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
    if not token
      token = $("meta[name='csrf-token']").attr('content') 
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
    if not token
      token = $("meta[name='csrf-token']").attr('content') 
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

  @checkVariationAvailableInStock: (variation_id, quantity) ->
    stockStatus = 
      available : true
    token = $("input[type='hidden'][name='authenticity_token']").val()
    if not token
      token = $("meta[name='csrf-token']").attr('content') 
    data = 
      authenticity_token : token
      variation: variation_id
      quantity : quantity
    $("div.panel div.loading").toggleClass('overlay')
    url = "/variation.json"
    $.ajax url,
      dataType: 'json'
      method: 'get'
      async: false
      data: $.param(data)
      success: (response, status, jqXHR) ->
        if not response.is_virtual and response.qty_in_stock < quantity
          CartHelper.openCartModal(CartTemplates.unavailableVariation(response))
          stockStatus.available = false
          stockStatus.maxQtyAvailable = response.qty_in_stock
          return
      complete:(jqXHR, status ) ->
        $("div.panel div.loading").toggleClass('overlay')
        return
    return stockStatus

  @checkCartItemsInStock: (options) ->
    needReviewCart = false
    token = $("input[type='hidden'][name='authenticity_token']").val()
    if not token
      token = $("meta[name='csrf-token']").attr('content')
    data = 
      authenticity_token : token
    url = '/cart.json'

    $.ajax url,
      dataType: 'json'
      method: 'get'
      async: false
      data: data
      success: (response, status, jqXHR) ->
        line_items = response.line_items
        if CartHelper.anyLineItemNotAvailable(line_items, options)
          needReviewCart = true
        else if CartHelper.anyLineItemLowStock(line_items, options)
          needReviewCart = true
    needReviewCart

  @updateSummaryCart: ->
    token = $("input[type='hidden'][name='authenticity_token']").val()
    if not token
      token = $("meta[name='csrf-token']").attr('content')
    data = 
      authenticity_token : token
    url = '/update_summary_cart.json'

    $.ajax url,
      dataType: 'script'
      method: 'post'
      async: true
      data: data
      success: (response, status, jqXHR) ->
          handler = new CartHandler()
          handler.clickOnEditCart()