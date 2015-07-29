describe 'CartHelper', ->

  it 'to be defined', ->
    expect(CartHelper).toBeDefined()

  describe 'plusOneCounterItems', ->
    beforeEach ->
      fixture.load 'helpers/shopping_cart_counter.html'
    afterEach ->
      fixture.cleanup()

    it 'update counter items by one', ->
      cartCounter = $("p[data-role='cart-counter'] a")
      expect(cartCounter.text()).toBe 'vazio'
      CartHelper.plusOneCounterItems()
      expect(cartCounter.text()).toBe '1 item'
      CartHelper.plusOneCounterItems()
      expect(cartCounter.text()).toBe '2 itens'
      CartHelper.plusOneCounterItems()
      expect(cartCounter.text()).toBe '3 itens'

  describe 'minusOnCounterItems', ->
    beforeEach ->
      fixture.load 'helpers/shopping_cart_counter.html'
    afterEach ->
      fixture.cleanup()

    it 'update counter items by one', ->
      cartCounter = $("p[data-role='cart-counter'] a")
      expect(cartCounter.text()).toBe 'vazio'
      CartHelper.updateCounterItems(9)
      CartHelper.minusOneCounterItems()
      expect(cartCounter.text()).toBe '8 itens'
      CartHelper.minusOneCounterItems()
      expect(cartCounter.text()).toBe '7 itens'
      CartHelper.minusOneCounterItems()
      expect(cartCounter.text()).toBe '6 itens'

  describe 'updateCounterItems', ->
    beforeEach ->
      fixture.load 'helpers/shopping_cart_counter.html'
    afterEach ->
      fixture.cleanup()

    it 'update counter items by number of items', ->
      cartCounter = $("p[data-role='cart-counter'] a")
      expect(cartCounter.text()).toBe 'vazio'
      CartHelper.updateCounterItems(9)
      expect(cartCounter.text()).toBe '9 itens'

  describe 'openCartModal', ->
    it 'open modal with cart item(s)', ->
      spyModal = spyOn($.fn, 'modal')
      CartHelper.openCartModal('<div><div>')
      expect(spyModal).toHaveBeenCalled()

  describe 'minusOneItemInCart', ->
    beforeEach ->
      fixture.load 'helpers/shopping_cart.html'
    afterEach ->
      fixture.cleanup()

    it 'reduce by one the items in cart', ->
      minusButton = $("input[type='button'][class='less']")
      quantity = $(minusButton).siblings("input[type='text'][class='qty']")
      total_prices = $(quantity).parent().parent().siblings('.total-price')

      CartHelper.minusOneItemInCart(minusButton)
      expect(quantity.val()).toBe '9'
      expect($(total_prices).find('p.current-price').text()).toBe 'R$ 1.800,00'

    it 'when quantity is zero does not update number of items', ->
      minusButton = $("input[type='button'][class='less']")
      quantity = $(minusButton).siblings("input[type='text'][class='qty']")
      total_prices = $(quantity).parent().parent().siblings('.total-price')
      quantity.val(0)

      CartHelper.minusOneItemInCart(minusButton)
      expect(quantity.val()).toBe '0'
      expect($(total_prices).find('p.current-price').text()).toBe 'R$ 200,00'

  describe 'plusOneItemInCart', ->
    beforeEach ->
      fixture.load 'helpers/shopping_cart.html'
    afterEach ->
      fixture.cleanup()

    it 'plus by one the items in cart', ->
      plusButton = $("input[type='button'][class='more']")
      quantity = $(plusButton).siblings("input[type='text'][class='qty']")
      total_prices = $(quantity).parent().parent().siblings('.total-price')
      
      CartHelper.plusOneItemInCart(plusButton)
      expect(quantity.val()).toBe '11'
      expect($(total_prices).find('p.current-price').text()).toBe 'R$ 2.200,00'

  describe 'updatePriceByQuantity', ->
    beforeEach ->
      fixture.load 'helpers/shopping_cart.html'
    afterEach ->
      fixture.cleanup()
    
    it 'update price by quantity', ->
      quantity = $("input#variation_qty_13")
      total_prices = $(quantity).parent().parent().siblings('.total-price')
      expect($(total_prices).find('p.current-price').text()).toBe 'R$ 200,00'

      CartHelper.updatePriceByQuantity(quantity, 10)
      expect($(total_prices).find('p.current-price').text()).toBe 'R$ 2.000,00'

  describe 'calculateSubTotalFor', ->
    beforeEach ->
      fixture.load 'helpers/shopping_cart.html'
    afterEach ->
      fixture.cleanup()

    it 'calculate subtotal for items in cart', ->
      cart = $('#shopping-cart')
      cart_content = $(cart).siblings("div#cart-content")

      CartHelper.calculateSubTotalFor(cart)
      expect($(cart_content).find('div.subtotal p').text()).toBe 'R$ 200,00'

  describe 'removeCartItem', ->
    beforeEach ->
      fixture.load 'helpers/shopping_cart.html'
    afterEach ->
      fixture.cleanup()

    it 'remove item from cart', ->
      cart = $('#shopping-cart')
      cart_content = $(cart).siblings("div#cart-content")
      item = $("a[data-variation-id='13']").closest('div.item')
      expect(item).toBeDefined()
      
      CartHelper.removeCartItem(13)
 
      setTimeout( ()->
        expect($(item).is(':visible')).toBeFalsy()
        expect($(cart_content).find('div.subtotal p').text()).toBe 'R$ 0,00'
      , 510);
      