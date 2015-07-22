describe 'CartHandler', ->
  it 'to be defined', ->
    expect(CartHandler).toBeDefined()

  describe 'constructor', ->
    it 'call all event handlers methods', ->
      spyClickOnCart = spyOn CartHandler.prototype, 'clickOnCart'
      spyClickAddToCart = spyOn CartHandler.prototype, 'clickOnAddToCart'
      new CartHandler()
      expect(spyClickOnCart).toHaveBeenCalled()
      expect(spyClickAddToCart).toHaveBeenCalled()

  describe 'onClickCart', ->
    beforeEach ->
      fixture.load 'handlers/shopping_cart.html', true
      @handler = new CartHandler()
      
    afterEach ->
      fixture.cleanup()

    it 'open modal with cart items', ->
      spyShowCart = spyOn(CartController, 'showCart')
      $("#shopping-cart").find("div.cart").click()
      expect(spyShowCart).toHaveBeenCalled()

  describe 'clickOnAddToCart', ->
    beforeEach ->
      fixture.load 'handlers/buy_button.html', true
      @handler = new CartHandler()

    afterEach ->
      fixture.cleanup()

    it 'add item to cart and open modal with item\'s details', ->
      spyAddToCart = spyOn(CartController, 'addToCart')
      $('a#buy-button').click()
      expect(spyAddToCart).toHaveBeenCalled()