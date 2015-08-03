class @CartHelper
  @plusOneCounterItems: ->
    _.plural('item', 'itens')
    numberOfItems = /\d+/.exec $("[data-role='cart-counter'] a").text()
    if numberOfItems is null
      numberOfItems = 1
    else
      numberOfItems = parseInt(numberOfItems) + 1
    $("[data-role='cart-counter'] a")
      .text("#{_('item').pluralize(numberOfItems, true)}")
  
  @minusOneCounterItems: ->
    _.plural('item', 'itens')
    numberOfItems = /\d+/.exec $("[data-role='cart-counter'] a").text()
    numberOfItems = parseInt(numberOfItems) - 1
    if numberOfItems is 0
      $("[data-role='cart-counter'] a").text('vazio')
    else
      $("[data-role='cart-counter'] a")
        .text("#{_('item').pluralize(numberOfItems, true)}")

  @updateCounterItems: (numberOfItems) ->
    _.plural('item', 'itens')
    if numberOfItems is 0
      $("[data-role='cart-counter'] a").text('vazio')
    else
      $("[data-role='cart-counter'] a")
      .text("#{_('item').pluralize(numberOfItems, true)}")

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
    current_price = MoneyHelper.value($(quantity_price).find('p.current-price').text())
    old_price = MoneyHelper.value($(quantity_price).find('p.old-price').text())
    total_prices = $(element).parent().parent().siblings('.total-price')
    $(total_prices).find('p.current-price').text(MoneyHelper.currency(qty * current_price))
    $(total_prices).find('p.old-price').text(MoneyHelper.currency(qty * old_price))

  @updateSubTotal: ->
    @calculateSubTotalFor($("#shopping-cart"))
    @calculateSubTotalFor($("#shopping-cart-responsive"))
  
  @calculateSubTotalFor: (cart) ->
    cart_content = $(cart).siblings("div#cart-content")
    prices = _.map $(cart_content).find("div.total-price p.current-price"), (elem)-> $(elem).text()
    sum = _.reduce prices, ((memo, num)->  memo + MoneyHelper.value(num) ), 0
    $(cart_content).find("div.subtotal p").text MoneyHelper.currency(sum)

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
    $(item).slideUp 500, ->
      $(item).remove()
      if $("div#cart-content div.panel-body").children().length is 0
        $("div#cart-content div.panel-body").html CartTemplates.emptyCart()
      CartHelper.updateSubTotal()  