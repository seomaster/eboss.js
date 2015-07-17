describe 'SelectVariationController', ->
	beforeEach ->
		@controller = new SelectVariationController()
		
	it 'to be defined', ->
		expect( SelectVariationController ).toBeDefined()

	describe 'update_regular_price', ->
		beforeEach ->
			fixture.load('helpers/update_price.html')

		afterEach ->
			 fixture.cleanup()

		it 'not update regular price', ->
			variations = []
			@controller.update_regular_price variations
			expect($("div[data-role='regular-price']").text()).not.toBe "R$ 123,00"

		it 'update regular price value', ->
			variations = [
				{
					regular_price_formatted: 'R$ 500,00'
				}
			]
			@controller.update_regular_price variations
			expect($("div[data-role='regular-price']").text()).toBe "R$ 500,00"

	describe 'update_sales_price', ->
		beforeEach ->
			fixture.load('helpers/update_price.html')

		afterEach ->
			 fixture.cleanup()
		
		it 'not update sales price', ->
			variations = []
			@controller.update_sales_price(variations)
			expect($("div[data-role='sales-price']").text()).not.toBe "R$ 123,00"

		it 'update sales price value', ->
			variations = [
				{
					sales_price_formatted: 'R$ 500,00'
				}
			]
			@controller.update_sales_price variations
			expect($("div[data-role='sales-price']").text()).toBe "R$ 500,00"

	describe 'update_history_state', ->
		beforeEach ->
			fixture.load('controllers/input_variation.html')

		afterEach ->
			fixture.cleanup()

		it 'update browser\'s history state', ->
			element = $("input[name='Color']")
			@controller.update_history_state element 
			expect(window.history.state).toBe 'http://localhost:9876/context.html?Color=Green'

	describe 'select_options_on_load', ->
		beforeEach ->
			@original_url = document.URL
			fixture.load('controllers/select_variations.html')

		afterEach ->
			window.history.pushState('', '', @original_url)
			fixture.cleanup()

		it 'check variations buttons', ->
			window.history.pushState @original_url, '','http://localhost:9876/context.html?Color=Green'
			spyEvent = spyOnEvent('#Color', 'click')
			@controller.select_options_on_load()
			expect($("input[name='Color']")).toBeChecked()
			expect(spyEvent).toHaveBeenTriggered()
