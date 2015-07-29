describe 'SelectVariationController', ->
  beforeEach ->
    @controller = new SelectVariationController()
    
  it 'to be defined', ->
    expect( SelectVariationController ).toBeDefined()

  describe 'updateRegularPrice', ->
    beforeEach ->
      fixture.load('helpers/update_price.html')

    afterEach ->
       fixture.cleanup()

    it 'not update regular price', ->
      variations = []
      @controller.updateRegularPrice variations
      expect($("div[data-role='regular-price']").text()).not.toBe "R$ 123,00"

    it 'update regular price value', ->
      variations = [
        {
          regular_price_formatted: 'R$ 500,00'
        }
      ]
      @controller.updateRegularPrice variations
      expect($("div[data-role='regular-price']").text()).toBe "R$ 500,00"

  describe 'updateSalesPrice', ->
    beforeEach ->
      fixture.load('helpers/update_price.html')

    afterEach ->
       fixture.cleanup()
    
    it 'not update sales price', ->
      variations = []
      @controller.updateSalesPrice(variations)
      expect($("div[data-role='sales-price']").text()).not.toBe "R$ 123,00"

    it 'update sales price value', ->
      variations = [
        {
          sale_price_formatted: 'R$ 500,00'
        }
      ]
      @controller.updateSalesPrice variations
      expect($("div[data-role='sales-price']").text()).toBe "R$ 500,00"

  describe 'updateHistoryState', ->
    beforeEach ->
      fixture.load('controllers/input_variation.html')

    afterEach ->
      fixture.cleanup()

    it 'update browser\'s history state', ->
      element = $("input[name='Color']")
      @controller.updateHistoryState element
      expect(document.URL).toBe 'http://localhost:9876/context.html?Color=Green'

  describe 'selectOptionsOnLoad', ->
    beforeEach ->
      @original_url = document.URL
      fixture.load 'controllers/select_variations.html', true

    afterEach ->
      window.history.pushState('', '', @original_url)
      fixture.cleanup()
    
    it 'check first variation when querystring is empty', ->
      window.history.pushState @original_url, '','http://localhost:9876/context.html'
      spyEvent = spyOnEvent('#Size', 'click')
      @controller.selectOptionsOnLoad()
      expect($("input[name='Color'][value='Green']").attr('checked')).toBeDefined()
      expect($("input[name='Size'][value='L']").attr('checked')).toBeDefined()
      expect($("input[name='Color'][value='Red']").attr('checked')).not.toBeDefined()
      expect($("input[name='Size'][value='M']").attr('checked')).not.toBeDefined()
      expect(spyEvent).toHaveBeenTriggered()

    it 'check variation button for color \'Green\'', ->
      window.history.pushState @original_url, '','http://localhost:9876/context.html?Color=Green'
      spyEvent = spyOnEvent('#Color', 'click')
      @controller.selectOptionsOnLoad()
      expect($("input[name='Color'][value='Green']").attr('checked')).toBeDefined()
      expect($("input[name='Color'][value='Red']").attr('checked')).not.toBeDefined()
      expect(spyEvent).toHaveBeenTriggered()

    it 'check variation button for color \'Green\' and size \'L\'', ->
      window.history.pushState @original_url, '','http://localhost:9876/context.html?Color=Green&Size=L'
      spyEvent = spyOnEvent('#Color', 'click')
      @controller.selectOptionsOnLoad()
      expect($("input[name='Color'][value='Green']").attr('checked')).toBeDefined()
      expect($("input[name='Color'][value='Red']").attr('checked')).not.toBeDefined()
      expect($("input[name='Size'][value='L']").attr('checked')).toBeDefined()
      expect($("input[name='Size'][value='M']").attr('checked')).not.toBeDefined()
      expect(spyEvent).toHaveBeenTriggered()

  describe 'toggleOptionButtons', ->
    beforeEach ->
      fixture.load 'controllers/toggle_variation_buttons.html', true

    afterEach ->
      fixture.cleanup()

    it 'toggle variation\'s button according with quantity in stock for one option', ->
      variations = [
        "product_name": "T-Shirt"
        "qty_in_stock": 0
        "options": [{"Color":"Green"}]
      ]
      button = $("input[type='radio'][value='Green']")
      @controller.toogleOptionButtons(button, variations)
      
      expect(button.attr('disabled')).toBe 'disabled'
      expect(button.parent().parent()).not.toHaveClass('active')
      expect(button.parent().parent()).toHaveClass('unavailable')
      expect(button.parent().parent().attr('title')).toBe 'Indisponível'

    it 'toggle variation\'s button according with quantity in stock for two options', ->
      variations = [
        "product_name": "T-Shirt (Color: Green Size: G)"
        "qty_in_stock": 0
        "options": [{"Color":"Green"}, {"Size":"G"}]
      ]

      clickedButton = $("input[type='radio'][name='Color'][value='Green']")
      sizeButton =  $("input[type='radio'][name='Size'][value='G']")
      
      @controller.toogleOptionButtons(clickedButton, variations)
            
      expect(sizeButton.attr('disabled')).toBe 'disabled'
      expect(sizeButton.parent().parent()).not.toHaveClass('active')
      expect(sizeButton.parent().parent()).toHaveClass('unavailable')
      expect(sizeButton.parent().parent().attr('title')).toBe 'Indisponível'

  describe 'updateSelectedVariation', ->
    beforeEach ->
      fixture.load 'controllers/update_selected_variation.html', true
    afterEach ->
      fixture.cleanup()

    it 'update id for varition selected', ->
      variations = [
        "id": 666
        "product_name": "T-Shirt (Color: Green)"
      ]
      expect($("input[name='variation_selected']").val()).toBe ''

      @controller.updateSelectedVariation(variations)
      expect($("input[name='variation_selected']").val()).toBe '666'

  describe 'toggleBuyButton', ->
    beforeEach ->
      fixture.load 'controllers/update_selected_variation.html', true
    afterEach ->
      fixture.cleanup()
    it 'toggle buy button when select variation according quantity in stock',->
      variations =[
        "id": 555
        "product_name": "T-Shirt (Color: Green)"
        "qty_in_stock": 0
      ]
      expect($("#buy-button").text()).toBe 'comprar'
      expect($("#buy-button").attr('disabled')).toBeFalsy()
      @controller.toggleBuyButton(variations)
      expect($("#buy-button").text()).toBe 'indisponível'
      expect($("#buy-button").attr('disabled')).toBeTruthy()