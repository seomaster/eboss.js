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
        "product_name": "T-Shirt (Color: Green)"
        "sku": "POLO222"
        "thumb_url": "/uploads/will1/image/file/2/t-shirt.thumb.jpg"
        "sale_price": 500.0
        "sale_price_formatted": "US$ 500,00"
        "regular_price": 500.0
        "regular_price_formatted":"US$ 500,00"
        "qty_in_stock": 10
        "options_values": ["Green"]
        "variation_images": [3, 4]

      jasmine.Ajax.stubRequest('/add_to_cart.json').andReturn({
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

    it 'show error when product is not in stock', ->
      pending 'not implemented yet'

  describe 'showCart', ->
    beforeEach ->
      jasmine.Ajax.install()

    afterEach ->
      jasmine.Ajax.uninstall()

    it 'show message when cart is empty', ->
      pending 'not implemented yet.'

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
            "options_values":["Pink"]
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
            "options_values":["Blue"]
            "variation_images":[2]}
      ]
      jasmine.Ajax.stubRequest('/cart.json').andReturn({
        'status': 200,
        'responseText': JSON.stringify(cart)
        })
      spyUpdateCounter = spyOn(CartHelper, 'updateCounterItems')
      spySelectedItems = spyOn(CartTemplates, 'cartItems')
      spyOpenModal = spyOn(CartHelper, 'openCartModal')

      CartController.showCart()

      expect(spyUpdateCounter).toHaveBeenCalledWith(cart.number_of_items)
      expect(spySelectedItems).toHaveBeenCalledWith(cart.line_items)
      expect(spyOpenModal).toHaveBeenCalled()