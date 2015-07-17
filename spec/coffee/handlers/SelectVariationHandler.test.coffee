describe 'SelectVariationHandler', ->
	it 'to be undefined', ->
		expect(SelectVariationHandler).toBeDefined

	describe 'on document ready', ->
		beforeEach ->
			#handler = new SelectVariationHandler()
			@originalURL = document.url
			window.history.pushState @originalURL, '', 'http://localhost:9876/context.html?Color=Green'
			fixture.load('controllers/select_variations.html', true)

		afterEach ->
			window.history.pushState @originalURL, '', 'http://localhost:9876/context.html'

		it 'select options from querystring parameters', ->
			pending 'Not implemented yet.'
			spyEvent = spyOnEvent window, 'load' 
			expect(window).toHandle('load')
			expect(spyEvent).toHaveBeenTriggered()
			expect($("input[name='Color']")).toBeChecked()
  
  describe 'on click variation', ->
  	beforeEach ->
  		fixture.load('handlers/on_click_variation.html')

  	it 'update price, image slider and toggle variation buttons', ->
  		spyEvent = spyOnEvent("input[type='radio'][data-role='variation']", 'click keyup')

  		$("input[data-role='variation'][value='Green']").click()

  		expect(spyEvent).toHaveBeenTriggered()
  		#expect(window.history.state).toBe 'http://localhost:9876/context.html?Color=Green'