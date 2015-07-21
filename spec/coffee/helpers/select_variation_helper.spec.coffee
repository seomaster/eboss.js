describe 'SelectVariationHelper', ->

  it 'to be defined', ->
    expect( SelectVariationHelper ).toBeDefined()

  describe 'update_price', ->
    beforeEach ->
      fixture.load('helpers/update_price.html')

    afterEach ->
       fixture.cleanup()

    it 'do nothing if price is null', ->
      SelectVariationHelper.updatePrice('#price', null)
      expect($("#price").text()).toBe '400'

    it 'update value for an element', ->    
      SelectVariationHelper.updatePrice('#price', 500)
      expect($("#price").text()).toBe '500'
  
   describe 'add_parameter_to_url', ->
    beforeEach ->
      @url = document.URL
    afterEach ->
      window.history.replaceState(@url, "Title", @url)

    it 'add parameter to browser\'s url', ->
      SelectVariationHelper.addParameterToURL('Color', 'Green')
      expect(window.location.toString()).toEqual 'http://localhost:9876/context.html?Color=Green'

   describe 'get_url_parameters', ->
    beforeEach ->
        @url = document.URL
      afterEach ->
        window.history.replaceState(@url, "Title", @url);
    it 'get params from querystring', ->
      SelectVariationHelper.addParameterToURL('Color', 'Green')
      SelectVariationHelper.addParameterToURL('Size', 'P')
      params = SelectVariationHelper.getURLParameters()
      expect(params).toEqual {'Color': 'Green', 'Size' : 'P'}

  describe 'updateImageCarousel', ->
    beforeEach ->
      fixture.load('helpers/update_image_carousel.html', true)
    afterEach ->
      fixture.cleanup()
    
    it 'show only image for specific variation', ->
      variations = [
        {
         "product_name": "T-Shirt (Color: Green)"
         "sku": "POLO222"
         "thumb_url": "/uploads/will1/image/file/2/t-shirt.thumb.jpg"
         "sale_price": 123.0
         "sale_price_formatted": "US$123,00"
         "regular_price": 123.0
         "regular_price_formatted":"US$123,00"
         "qty_in_stock": 0
         "options_values": ["Green"]
         "variation_images": [3, 4]
        }
      ]
      spy = spyOn($.fn, 'data').and.returnValue({ reinit : () -> })
      SelectVariationHelper.updateImageCarousel(variations)
      expect($('div#image-big').children().length).toBe 2
      expect($('div#thumb-nav').children().length).toBe 2
      expect(spy).toHaveBeenCalledWith('owlCarousel')
      expect(spy.calls.count()).toBe 2

  describe 'enable_all_option_buttons', ->
    beforeEach ->
      fixture.load('controllers/enable_all_options_buttons.html')

    afterEach ->
      fixture.cleanup()

    it 'remove classes and enable all variation\'s buttons', ->
      buttons = $("input[type='radio'][data-role='variation']:not([disabled=true])")
      
      SelectVariationHelper.enableAllOptionButtons()
      for button in buttons
        expect($(button)).not.toHaveAttr('disabled')
        li = $(button).parent().parent()
        expect(li).not.toHaveAttr('title')
        expect(li).not.toHaveClass('unavailable')

  describe 'disable_variation_button', ->
    beforeEach ->
      fixture.load('controllers/disable_variation_button.html')
    afterEach ->
      fixture.cleanup()

    it 'disable button for variation with quantity zero in stock', ->
      button = $("input[type='radio'][value='Green']")
      SelectVariationHelper.disableVariationButton(button)
      expect($(button).attr('disabled')).toBe 'disabled'
      li = $(button).parent().parent()
      expect(li).toHaveClass('unavailable')
      expect($(li).attr('title')).toBe 'Indisponível'