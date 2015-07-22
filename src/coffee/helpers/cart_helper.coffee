class @CartHelper
  @plusOneCounterItems: ->
    _.plural('item', 'itens')
    numberOfItems = /\d+/.exec $("p[data-role='cart-counter']").text()
    numberOfItems = parseInt(numberOfItems) + 1
    $("p[data-role='cart-counter'] a")
      .text("#{_('item').pluralize(numberOfItems, true)}")

  @updateCounterItems: (numberOfItems) ->
    _.plural('item', 'itens')
    $("p[data-role='cart-counter']")
    .text("#{_('item').pluralize(numberOfItems, true)}")

  @openCartModal: (template) ->
    $(template).modal({backdrop:'static', keyboard: false})