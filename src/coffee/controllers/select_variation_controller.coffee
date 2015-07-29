class @SelectVariationController
  constructor: ->

  updateSalesPrice: (variations) ->
    if variations.length == 1
      SelectVariationHelper.updatePrice("div[data-role='sales-price']",
        variations[0].sale_price_formatted)

  updateRegularPrice: (variations) ->
    if variations.length == 1
      SelectVariationHelper.updatePrice("div[data-role='regular-price']",
        variations[0].regular_price_formatted)

  updateHistoryState: (element) ->
    SelectVariationHelper
      .addParameterToURL($(element).attr('name'), $(element).val())

  selectOptionsOnLoad: ->
    parameters = SelectVariationHelper.getURLParameters()
    if _.isEmpty(parameters)
      first_options = $("ul.feature-options").find("input[data-role='variation']:first")
      for option in first_options
        $(option).attr 'checked', true
        $(option).click()
    else
      options = $("input[data-role='variation']")
      options.each (index, option) ->
        name = $(option).attr 'name'
        value = $(option).attr 'value'
        if name of parameters and parameters[name] == value
          $(option).attr 'checked', true
          $(option).click()

  updateImageCarousel: (variations) ->
    SelectVariationHelper.updateImageCarousel(variations)

  toogleOptionButtons: (buttonClicked, variations) ->
    button = $(buttonClicked)
    SelectVariationHelper.enableAllOptionButtons()
    for variation in variations
      if variation.qty_in_stock == 0 and variation.options.length == 1
        opt = _.values(variation.options[0])[0]
        SelectVariationHelper
          .disableOptionButton($("input[type='radio'][value='#{opt}']"))
      else if variation.qty_in_stock == 0 and variation.options.length > 1
        for opt in variation.options
          if _.values(opt)[0] != $(button).attr('value')
            opt_value = _.values(opt)[0]
            SelectVariationHelper
            .disableOptionButton($("input[type='radio'][value='#{opt_value}']"))

  updateSelectedVariation: (variations) ->
    if variations.length == 1
      $("input[type='hidden'][name='variation_selected']").val(variations[0].id)

  toggleBuyButton: (variations)->
    if variations.length == 1 and variations[0].qty_in_stock == 0
      $("#buy-button").text('indisponível').attr('disabled', true)
    else
      $("#buy-button").text('comprar').attr('disabled', false)