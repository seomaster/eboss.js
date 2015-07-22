class @CartController
  @addToCart: ->
    form = $("form[id='add_to_cart']")
    data = $(form).serialize()
    url = '/add_to_cart.json'
    $.ajax url,
      dataType: 'json'
      method: 'post'
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
      data: data
      success: (response, status, jqXHR) ->
        CartHelper.updateCounterItems(response.number_of_items)
        CartHelper.openCartModal(CartTemplates.cartItems(response.line_items))