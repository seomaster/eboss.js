class @CartHandler
  constructor: ->
    
  clickOnCart: ->
    $("#shopping-cart-responsive").children().on 'click', (e)->
      e.preventDefault()
      CartController.showCart()
    $('#shopping-cart').children().on 'click', (e) ->
      e.preventDefault()
      CartController.showCart()

  clickOnAddToCart: ->
    $('#buy-button').on 'click', (e) ->
      e.preventDefault()
      e.stopPropagation()
      CartController.addToCart()

  clickOnRemoveCartItem: ->
    $("span.remove-item a").on 'click', (e) ->
      e.preventDefault()
      e.stopPropagation()
      if confirm('Tem certeza de que deseja remover este item?')
        variationId = $(e.target).parent().data('variationId')
        CartController.removeCartItem(variationId)
        CartController.updateCartCounter()

  onScrollCart: ->
    $("#cart-content .panel-body").on 'mousewheel DOMMouseScroll', (e)->
      scrollTo = null
      if e.type == 'mousewheel'
        scrollTo = (e.originalEvent.wheelDelta * -1)
      else if e.type == 'DOMMouseScroll'
        scrollTo = 40 * e.originalEvent.detail
      if scrollTo
        e.preventDefault()
        $(this).scrollTop scrollTo + $(this).scrollTop()

  onlyNumbers: ->
    $("input[type='text'][class='qty']").keypress (e) ->
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57))
       return false

  onChangeQuantity: ->
    $("input[type='text'][class='qty']").on 'change', (e) ->
      variationId = $(e.target).siblings("input[type='hidden']").val()
      quantity = parseInt $(e.target).val()
      if _.isNaN(quantity)
        $(e.target).val(e.target.defaultValue)
      else
        if quantity is 0
          if confirm 'Tem certeza de que deseja remover esse item?'
            CartController.removeCartItem(variationId)
            CartController.updateCartCounter()
          else
            $(e.target).val(e.target.defaultValue)
        else
          CartController.updateVariationQuantityInCart(variationId, quantity)
          CartHelper.updatePriceByQuantity(e.target, quantity)
          CartHelper.updateSubTotal()
          CartController.updateCartCounter()

  onClickMinus: -> 
    $("input[type='button'][class='less']").on 'click', (e) ->
      variationId = $(e.target).siblings("input[type='hidden']").val()
      quantity = parseInt $(e.target).siblings("input[type='text']").val()
      if quantity - 1 is 0 
        if confirm 'Tem certeza de que deseja remover esse item?'
          CartController.removeCartItem(variationId)
          CartController.updateCartCounter()
      else
        CartController.updateVariationQuantityInCart(variationId, quantity - 1)
        CartHelper.minusOneItemInCart(e.target)
        CartHelper.updateSubTotal()
        CartController.updateCartCounter()

  onClickPlus: ->
    $("input[type='button'][class='more']").on 'click', (e) ->
      variationId = $(e.target).siblings("input[type='hidden']").val()
      quantity = $(e.target).siblings("input[type='text']").val()
      CartController.updateVariationQuantityInCart(variationId, parseInt(quantity) + 1)
      CartHelper.plusOneItemInCart(e.target)
      CartHelper.updateSubTotal()
      CartController.updateCartCounter()
  
  onChangeTable: ->
    $("#product-grid").bind "DOMSubtreeModified", (e) ->
      if $("#product-grid>tbody>tr").length is 0
        CartHelper.emptyCartPage()

  onDocumentReady: ->
    $(window).bind 'load', ->
      CartController.updateCartCounter()