class @CartHelper
  @plusOneCounterItems: ->
    _.plural($.t('cart.item.one'), $.t('cart.item.others'))
    numberOfItems = /\d+/.exec $("[data-role='cart-counter'] a").text()
    if numberOfItems is null
      numberOfItems = 1
    else
      numberOfItems = parseInt(numberOfItems) + 1
    $("[data-role='cart-counter'] a")
      .text("#{_($.t('cart.item.one')).pluralize(numberOfItems, true)}")
  
  @minusOneCounterItems: ->
    _.plural($.t('cart.item.one'), $.t('cart.item.others'))
    numberOfItems = /\d+/.exec $("[data-role='cart-counter'] a").text()
    numberOfItems = parseInt(numberOfItems) - 1
    if numberOfItems is 0
      $("[data-role='cart-counter'] a").text($.t('cart.empty'))
    else
      $("[data-role='cart-counter'] a")
        .text("#{_($.t('cart.item.one')).pluralize(numberOfItems, true)}")

  @updateCounterItems: (numberOfItems) ->
    _.plural($.t('cart.item.one'), $.t('cart.item.others'))
    if numberOfItems is 0
      $("[data-role='cart-counter'] a").text($.t('cart.empty'))
    else
      $("[data-role='cart-counter'] a")
      .text("#{_($.t('cart.item.one')).pluralize(numberOfItems, true)}")

  @minusOneItemInCart: (element) ->
    quantity = parseInt($(element).siblings("input[type='text'][class='qty']").val())
    if quantity > 0
      quantity = quantity - 1
      $(element).siblings("input[type='text'][class='qty']").val(quantity) 
      CartHelper.updatePriceByQuantity(element, quantity)

  @plusOneItemInCart: (element) ->
    quantity = parseInt($(element).siblings("input[type='text'][class='qty']").val())
    quantity = quantity + 1
    $(element).siblings("input[type='text'][class='qty']").val(quantity)
    CartHelper.updatePriceByQuantity(element, quantity)

  @updatePriceByQuantity: (element, qty) ->
    quantity_price = $(element).parent().parent()
    current_price = $(quantity_price).find('p.current-price')
    if current_price.length is 0
      current_price = $(quantity_price).closest('tr').find('td.unit-price').find('p.current-price');
    current_price = MoneyHelper.value(current_price.text())

    old_price = $(quantity_price).find('p.old-price');
    if old_price.length is 0
      old_price = $(quantity_price).closest('tr').find('td.unit-price').find('p.old-price')
    old_price = MoneyHelper.value(old_price.text())

    total_prices = $(element).parent().parent().siblings('.total-price')
    if total_prices.length is 0
      total_prices = $(quantity_price).closest('tr').find('td.unit-subtotal')

    $(total_prices).find('p.current-price').text(MoneyHelper.currency(qty * current_price)) if current_price
    $(total_prices).find('p.old-price').text(MoneyHelper.currency(qty * old_price)) if old_price

  @updateSubTotal: ->
    @calculateSubTotalFor($("#shopping-cart~div#cart-content"))
    @calculateSubTotalFor($("#shopping-cart-responsive~div#cart-content"))
    # Modal cart on checkout
    @calculateSubTotalFor($("#shopping_cart_modal").find("div.modal-body"))

  @calculateSubTotalFor: (cart) ->
    cart_content = $(cart)
    if cart_content.length is 0
      cart_content = $(cart).find('#product-grid > tbody > tr')
    prices = _.map $(cart_content).find("div.total-price p.current-price"), (elem)-> $(elem).text()
    sum = _.reduce prices, ((memo, num)->  memo + MoneyHelper.value(num) ), 0
    
    sub_total = $(cart_content).find("div.subtotal p");
    if sub_total.length is 0
      sub_total = $(cart).find('div#subtotal > div.amount p')
    $(sub_total).text MoneyHelper.currency(sum)

  @anyLineItemNotAvailable: (line_items, options={confirm: false}) ->
    isNotAvailable = (line_item) -> not line_item.variation.is_virtual and line_item.variation.qty_in_stock is 0
    if _.any(line_items, isNotAvailable)
      if options.confirm
        CartHelper.confirmReviewCart({unavailable: true})
      else
        CartHelper.alertReviewCart({unavailable: true})
      return true
    false
      
  @anyLineItemLowStock: (line_items, options={confirm: false}) ->
    isLowStock = (line_item) -> not line_item.variation.is_virtual and line_item.qty > line_item.variation.qty_in_stock
    if _.any(line_items, isLowStock)
      if options.confirm 
        CartHelper.confirmReviewCart()
      else
        CartHelper.alertReviewCart()
      return true
    false

  @openCartModal: (template) ->
    $(template).modal()
      
  @showCart: (template) ->
    $("div#cart-content").remove()
    $("<div id='cart-content' class='cart-container dropdown-menu pull-right' aria-labelledby='shopping-cart'>").insertAfter($("div#shopping-cart"))
    $("<div id='cart-content' class='cart-container dropdown-menu pull-right' aria-labelledby='shopping-cart'>").insertAfter($("div#shopping-cart-responsive"))
    $("div#cart-content").html(template)
    $('div#cart-content').click (e) -> e.stopPropagation()

  @removeCartItem: (variation) ->
    item = $("a[data-variation-id='#{variation}']").closest('div.item')
    if item.length is 0
      item = $("a[data-variation-id='#{variation}']").closest('tr')
    $(item).slideUp 500, ->
      $(item).remove()
      if $("div#cart-content div.panel-body").children().length is 0
        $("div#cart-content div.panel-body").html CartTemplates.emptyCart()
        $("div#cart-content div.panel-footer #checkout-button").remove()
      CartHelper.updateSubTotal()

  @emptyCartPage: () ->
    $("div.cart-is-empty").toggleClass('yes')
    $("div#subtotal").hide()
    $("#no-more-tables").empty()
    $("#no-more-tables").html(CartTemplates.emptyCart())

  @alertReviewCart: (options = {unavailable: false}) ->
    $(CartTemplates.alertModal(CartTemplates.reviewCartItems(options))).modal()
      .on('hidden.bs.modal', ->
        CartHelper.alertCartItems()
        $("#shopping_cart_modal").remove() 
      )

  @confirmReviewCart: (options= {unavailable: false}) ->
    $(CartTemplates.confirmModal(CartTemplates.reviewCartItems(options))).modal()
      .on('hidden.bs.modal', ->
        CartHelper.alertCartItems()
        $("#shopping_cart_modal").remove() 
      )

  @alertCartItems: () ->
    $("#cart-items").effect('shake')
  
  @clickAlreadyAttached: (selector) ->
    ev = $._data(document, 'events')
    isResponsiveLink = (elem) -> elem.selector is selector
    _.any(ev.click, isResponsiveLink )
