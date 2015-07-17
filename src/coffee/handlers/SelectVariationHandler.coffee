class SelectVariationHandler
	constructor: ->
		@controller = new SelectVariationController()
		@onDocumentReady()

	onDocumentReady: ->
		#$(window).bind 'load', ->
		#	@controller.select_options_on_load()