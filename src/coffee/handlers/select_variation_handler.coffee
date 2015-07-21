class @SelectVariationHandler
  constructor: ->
    @onClickVariation()
    @onDocumentReady()

  onClickVariation: ->
    $("input[data-role='variation']").on 'click keyup', (event) ->
      event.stopPropagation()
      form = $(@).closest('form')
      action = "#{$(form).attr('action')}.json"
      data = $(form).serialize()
      request =
        url: action
        data: data
        method: 'get'
        dataType: 'JSON'
        success: (response) ->
          @controller = new SelectVariationController()
          @controller.updateSalesPrice(response)
          @controller.updateRegularPrice(response)
          @controller.updateImageCarousel(response)
          @controller.toogleVariationButtons(event.target, response)
          @controller.updateHistoryState($(this))
      $.ajax request

  onDocumentReady: ->
    $(window).bind 'load', =>
      @controller = new SelectVariationController()
      @controller.selectOptionsOnLoad()