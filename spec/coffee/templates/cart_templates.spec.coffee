describe 'CartTemplates', ->
  it 'to be defined', ->
    expect(CartTemplates).toBeDefined()

  describe 'selectedVariation', ->
    it 'render a selected variation', ->
      variation = 
         "product_name": "T-Shirt (Color: Green)"
         "sku": "POLO222"
         "thumb_url": "/uploads/will1/image/file/2/t-shirt.thumb.jpg"
         "sale_price": 500.0
         "sale_price_formatted": "US$ 500,00"
         "regular_price": 500.0
         "regular_price_formatted":"US$ 500,00"
         "qty_in_stock": 0
         "options_values": ["Green"]
         "variation_images": [3, 4]

      rendered = CartTemplates.selectedVariation(variation)
      expect(rendered).toContain "class='modal fade'"
      expect(rendered).toContain variation['product_name']
      expect(rendered).toContain variation['thumb_url']
      expect(rendered).toContain variation['regular_price_formatted']

  describe 'cartItems', ->
    it 'render a list of items in cart', ->
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

      rendered = CartTemplates.cartItems(cart.line_items)

      expect(rendered).toContain "class='modal fade'"
      expect(rendered).toContain cart.line_items[0].variation.product_name
      expect(rendered).toContain cart.line_items[0].variation.thumb_url
      expect(rendered).toContain cart.line_items[0].variation.regular_price_formatted

      expect(rendered).toContain cart.line_items[1].variation.product_name
      expect(rendered).toContain cart.line_items[1].variation.thumb_url
      expect(rendered).toContain cart.line_items[1].variation.regular_price_formatted