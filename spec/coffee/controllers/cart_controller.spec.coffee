describe 'CartController', ->
  it 'to be defined', ->
    expect(CartController).toBeDefined()

  describe 'addToCart', ->
    beforeEach ->
      jasmine.Ajax.install()
    afterEach ->
      jasmine.Ajax.uninstall()

    it 'add item to cart and open modal', ->
      variation =
        "product_name": "T-Shirt"
        "sku": "POLO222"
        "thumb_url": "/uploads/will1/image/file/2/t-shirt.thumb.jpg"
        "sale_price": 500.0
        "sale_price_formatted": "US$ 500,00"
        "regular_price": 500.0
        "regular_price_formatted":"US$ 500,00"
        "qty_in_stock": 10
        "options": [{"Color":"Green"}]
        "variation_images": [3, 4]

      jasmine.Ajax.stubRequest('/cart.json').andReturn({
        'status': 200,
        'responseText': JSON.stringify(variation)
        })

      spyPlusOneCounterItems = spyOn(CartHelper, 'plusOneCounterItems')
      spySelectedVariation = spyOn(CartTemplates, 'selectedVariation')
      spyOpenModal = spyOn(CartHelper, 'openCartModal')

      CartController.addToCart()

      expect(spyPlusOneCounterItems).toHaveBeenCalled()
      expect(spySelectedVariation).toHaveBeenCalledWith(variation)
      expect(spyOpenModal).toHaveBeenCalled()

  describe 'showCart', ->
    beforeEach ->
      fixture.load('controllers/shopping_cart.html')
      jasmine.Ajax.install()

    afterEach ->
      jasmine.Ajax.uninstall()
      fixture.cleanup()

    it 'show message when cart is empty', ->
      cart = 
        "number_of_items":0
        "line_items":[]
      jasmine.Ajax.stubRequest('/cart.json').andReturn({
        'status': 200,
        'responseText': JSON.stringify(cart)
        })
      CartController.showCart()
      cart = $("div#shopping-cart").siblings('#cart-content')
      empty_cart = $(cart).find('div.empty-cart')
      expect(empty_cart.text().trim()).toBe 'O carrinho está vazio.'

    it 'open modal with cart items', ->
      cart = 
        'number_of_items': 6
        'line_items': [
          {'qty': 4,
          'variation':
            "product_name":"T-Shirt (Color: Pink)"
            "sku":"POLO222"
            "sale_price":123.0
            "sale_price_formatted":"US$ 123,00"
            "regular_price":123.0
            "regular_price_formatted":"US$ 123,00"
            "qty_in_stock":10
            "options":[{"Color":"Pink"}]
            "variation_images":[2]},
          {'qty': 2
          'variation':
            "product_name":"T-Shirt (Color: Blue)"
            "sku":"POLO223"
            "sale_price":123.0
            "sale_price_formatted":"US$ 123,00"
            "regular_price":123.0
            "regular_price_formatted":"US$ 123,00"
            "qty_in_stock":10
            "options":[{"Color":"Blue"}]
            "variation_images":[2]}
      ]
      jasmine.Ajax.stubRequest('/cart.json').andReturn({
        'status': 200,
        'responseText': JSON.stringify(cart)
        })
      spyUpdateCounter = spyOn(CartHelper, 'updateCounterItems')
      spySelectedItems = spyOn(CartTemplates, 'cartItems')
      spyShowCart = spyOn(CartHelper, 'showCart')
      spyUpdateSubTotal = spyOn(CartHelper, 'updateSubTotal')
      spyOnClickRemoveCartItem = spyOn(CartHandler.prototype, 'clickOnRemoveCartItem')
      spyOnScrollCart = spyOn(CartHandler.prototype, 'onScrollCart')
      spyOnClickMinus = spyOn(CartHandler.prototype, 'onClickMinus')
      spyOnClickPlus = spyOn(CartHandler.prototype, 'onClickPlus')

      CartController.showCart()

      expect(spyUpdateCounter).toHaveBeenCalledWith(cart.number_of_items)
      expect(spySelectedItems).toHaveBeenCalledWith(cart.line_items)
      expect(spyShowCart).toHaveBeenCalled()
      expect(spyUpdateSubTotal).toHaveBeenCalled()
      expect(spyOnClickRemoveCartItem).toHaveBeenCalled()
      expect(spyOnScrollCart).toHaveBeenCalled()
      expect(spyOnClickMinus).toHaveBeenCalled()
      expect(spyOnClickPlus).toHaveBeenCalled()

  describe 'updateCartCounter', ->
    beforeEach ->
      jasmine.Ajax.install()
    afterEach ->
      jasmine.Ajax.uninstall()

    it 'update counter for item in shopping cart', ->
      cart = 
        'number_of_items': 6
        'line_items': [
          {'qty': 4,
          'variation':
            "product_name":"T-Shirt (Color: Pink)"
            "sku":"POLO222"
            "sale_price":123.0
            "sale_price_formatted":"US$ 123,00"
            "regular_price":123.0
            "regular_price_formatted":"US$ 123,00"
            "qty_in_stock":10
            "options":[{"Color":"Pink"}]
            "variation_images":[2]},
          {'qty': 2
          'variation':
            "product_name":"T-Shirt (Color: Blue)"
            "sku":"POLO223"
            "sale_price":123.0
            "sale_price_formatted":"US$ 123,00"
            "regular_price":123.0
            "regular_price_formatted":"US$ 123,00"
            "qty_in_stock":10
            "options":[{"Color":"Blue"}]
            "variation_images":[2]}
      ]

      jasmine.Ajax.stubRequest('/cart.json').andReturn({
        'status': 200,
        'responseText': JSON.stringify(cart)
      })

      spyUpdateCounter = spyOn(CartHelper, 'updateCounterItems')
      CartController.updateCartCounter()
      expect(spyUpdateCounter).toHaveBeenCalledWith(cart.number_of_items)

  describe 'remoteCartItem', ->
    beforeEach ->
      jasmine.Ajax.install()
    afterEach ->
      jasmine.Ajax.uninstall()

    it 'remove item from shopping cart', ->
      cart = 
        'number_of_items': 6
        'line_items': [
          {'qty': 4,
          'variation':
            "product_name":"T-Shirt (Color: Pink)"
            "sku":"POLO222"
            "sale_price":123.0
            "sale_price_formatted":"US$ 123,00"
            "regular_price":123.0
            "regular_price_formatted":"US$ 123,00"
            "qty_in_stock":10
            "options":[{"Color":"Pink"}]
            "variation_images":[2]},
          {'qty': 2
          'variation':
            "product_name":"T-Shirt (Color: Blue)"
            "sku":"POLO223"
            "sale_price":123.0
            "sale_price_formatted":"US$ 123,00"
            "regular_price":123.0
            "regular_price_formatted":"US$ 123,00"
            "qty_in_stock":10
            "options":[{"Color":"Blue"}]
            "variation_images":[2]}
      ]
      jasmine.Ajax.stubRequest('/cart.json').andReturn({
        'status': 200, # Responding with 200 because with 204 the response is undefined
        'responseText': JSON.stringify(cart)
      })
      spyRemoveCartItem = spyOn(CartHelper, 'removeCartItem')
      spyUpdateCounter = spyOn(CartHelper, 'updateCounterItems')
      CartController.removeCartItem(123)
      expect(spyRemoveCartItem).toHaveBeenCalledWith(123)
      expect(spyUpdateCounter).toHaveBeenCalled()
    