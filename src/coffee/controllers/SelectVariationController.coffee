class SelectVariationController
	constructor: ->

	update_sales_price: (variations) ->
		if variations.length == 1
			SelectVariationHelper.update_price "div[data-role='sales-price']", variations[0].sales_price_formatted

	update_regular_price: (variations) ->
		if variations.length == 1			
			SelectVariationHelper.update_price "div[data-role='regular-price']", variations[0].regular_price_formatted

	update_history_state: (element) ->
		SelectVariationHelper.add_parameter_to_url $(element).attr('name'), $(element).val()

	select_options_on_load: ->
		parameters = SelectVariationHelper.get_url_parameters()
		$("input[data-role='variation']").each (index, element) ->
			attributeName = $(element).attr 'name'
			if parameters.hasOwnProperty attributeName
				$(element).attr 'checked', true
				$(element).click()

	toogle_variation_buttons: (button, variations) ->
		button = $(button)
		SelectVariationHelper.enable_all_option_buttons()
