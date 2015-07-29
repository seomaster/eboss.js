describe 'SelectVariationHandler', ->
  it 'to be undefined', ->
    expect(SelectVariationHandler).toBeDefined

  describe 'onDocumentReady', ->
    beforeEach ->
      @original_url = document.URL
      fixture.load('handlers/select_variations.html', true)
      new SelectVariationHandler()

    afterEach ->
      window.history.pushState('', '', @original_url)

    it 'select options from querystring parameters to select options',  ->
      pending 'Not implemented yet.'
  
  describe 'onClickVariation', ->
    beforeEach ->
      fixture.load('handlers/on_click_variation.html', true)
      variations = [
        {
         "id": 444
         "sku": "POLO222"
         "product_name": "T-Shirt"
         "thumb_url": "/uploads/will1/image/file/2/t-shirt.thumb.jpg"
         "sale_price": 500.0
         "regular_price": 500.0
         "qty_in_stock": 0
         "options": [{"Color":"Green"}]
         "variation_images": [3, 4]
        }
      ]
      jasmine.Ajax.install()
      jasmine.Ajax.stubRequest('/p/t-shirt.json?utf8=%E2%9C%93&nickname=&Color=Green').andReturn({
        'status': 200,
        'responseText': JSON.stringify(variations)
        })
      @url = document.URL
      new SelectVariationHandler()
  
    it 'update price, update url params, update image\'s carousel, toggle buy button', ->
      $("input[data-role='variation'][value='Green']").attr('checked',true).click()
      expect($("#regular-price").text()).toBe 'R$ 500,00'
      expect($("#sale-price").text()).toBe 'R$ 500,00'
      expect($("input[type='hidden'][name='variation_selected']").val()).toBe '444'
      expect($("#buy-button").text()).toBe 'indisponível'
      expect($("#buy-button").attr('disabled')).toBeTruthy()
      expect(window.location.toString()).toEqual 'http://localhost:9876/context.html?Color=Green'

    afterEach ->
      window.history.replaceState(@url, "Title", @url)
      jasmine.Ajax.uninstall()
      fixture.cleanup()
