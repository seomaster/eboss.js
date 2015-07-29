describe 'CartHandler', ->
  it 'to be defined', ->
    expect(CartHandler).toBeDefined()

  describe 'clickOnCart', ->
    beforeEach ->
      fixture.load 'handlers/shopping_cart.html', true
      @handler = new CartHandler()
      @handler.clickOnCart()
      
    afterEach ->
      fixture.cleanup()

    it 'open modal with cart items', ->
      spyShowCart = spyOn(CartController, 'showCart')
      $("#shopping-cart").find("div.cart").click()
      expect(spyShowCart).toHaveBeenCalled()

  describe 'clickOnRemoveCartItem', ->
    beforeEach ->
      fixture.load 'handlers/shopping_cart.html', true
      @handler = new CartHandler()
      @handler.clickOnRemoveCartItem()

    afterEach ->
      fixture.cleanup()

    it 'remove item from cart', ->
      spyRemoveCartItem = spyOn(CartController, 'removeCartItem')
      spyUpdateCartCounter = spyOn(CartController, 'updateCartCounter')
      spyOn(window, 'confirm').and.returnValue(true)
      $('span.remove-item a').click()
      expect(spyUpdateCartCounter).toHaveBeenCalled()
      expect(spyRemoveCartItem).toHaveBeenCalled()

  describe 'clickOnAddToCart', ->
    beforeEach ->
      fixture.load 'handlers/buy_button.html', true
      @handler = new CartHandler()
      @handler.clickOnAddToCart()

    afterEach ->
      fixture.cleanup()

    it 'add item to cart and open modal with item\'s details', ->
      spyAddToCart = spyOn(CartController, 'addToCart')
      $('a#buy-button').click()
      expect(spyAddToCart).toHaveBeenCalled()

  describe 'onClickMinus', ->
    beforeEach ->
      fixture.load 'handlers/shopping_cart.html', true
      @handler = new CartHandler()
      @handler.onClickMinus()

    afterEach ->
      fixture.cleanup()

    it 'reduce item\'s quantity by one on cart', ->
      spyUpdateVariationQuantityInCart = spyOn(CartController, 'updateVariationQuantityInCart')
      spyMinusOneItemInCart = spyOn(CartHelper, 'minusOneItemInCart')
      spyUpdateSubTotal = spyOn(CartHelper, 'updateSubTotal')
      spyUpdateCartCounter = spyOn(CartController, 'updateCartCounter')

      $("input[type='button'][class='less']").click()

      expect(spyUpdateVariationQuantityInCart).toHaveBeenCalled()
      expect(spyMinusOneItemInCart).toHaveBeenCalled()
      expect(spyUpdateSubTotal).toHaveBeenCalled()
      expect(spyUpdateCartCounter).toHaveBeenCalled()
    
    it 'show confirmation when quantity is one', ->
      spyRemoveCartItem = spyOn(CartController, 'removeCartItem')
      spyUpdateCartCounter = spyOn(CartController, 'updateCartCounter')
      spyOn(window, 'confirm').and.returnValue(true)
      $("input[type='text'][id='variation_qty_13']").val(1)

      $("input[type='button'][class='less']").click()
      
      expect(spyRemoveCartItem).toHaveBeenCalled()
      expect(spyUpdateCartCounter).toHaveBeenCalled()

  describe 'onClickPlus', ->
    beforeEach ->
      fixture.load 'handlers/shopping_cart.html', true
      @handler = new CartHandler()
      @handler.onClickPlus()

    afterEach ->
      fixture.cleanup()

    it 'plus item\'s quantity by one on cart', ->
      spyUpdateVariationQuantityInCart = spyOn(CartController, 'updateVariationQuantityInCart')
      spyPlusOneItemInCart = spyOn(CartHelper, 'plusOneItemInCart')
      spyUpdateSubTotal = spyOn(CartHelper, 'updateSubTotal')
      
      $("input[type='button'][class='more']").click()

      expect(spyUpdateVariationQuantityInCart).toHaveBeenCalled()
      expect(spyPlusOneItemInCart).toHaveBeenCalled()
      expect(spyUpdateSubTotal).toHaveBeenCalled()