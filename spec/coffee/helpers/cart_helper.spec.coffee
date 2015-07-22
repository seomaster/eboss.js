describe 'CartHelper', ->

  it 'to be defined', ->
    expect(CartHelper).toBeDefined()

  describe 'plusOneCounterItems', ->
    beforeEach ->
      fixture.load 'helpers/shopping_cart.html'
    afterEach ->
      fixture.cleanup()

    it 'update counter items by one', ->
      cartCounter = $("p[data-role='cart-counter']")
      expect(cartCounter.text()).toBe '0 itens'
      CartHelper.plusOneCounterItems()
      expect(cartCounter.text()).toBe '1 item'
      CartHelper.plusOneCounterItems()
      expect(cartCounter.text()).toBe '2 itens'
      CartHelper.plusOneCounterItems()
      expect(cartCounter.text()).toBe '3 itens'

  describe 'updateCounterItems', ->
    beforeEach ->
      fixture.load 'helpers/shopping_cart.html'
    afterEach ->
      fixture.cleanup()

    it 'update counter items by number of items', ->
      cartCounter = $("p[data-role='cart-counter']")
      expect(cartCounter.text()).toBe '0 itens'
      CartHelper.updateCounterItems(9)
      expect(cartCounter.text()).toBe '9 itens'

  describe 'openCartModal', ->
    it 'open modal with cart item(s)', ->
      spyModal = spyOn($.fn, 'modal')
      CartHelper.openCartModal('<div><div>')
      expect(spyModal).toHaveBeenCalled()