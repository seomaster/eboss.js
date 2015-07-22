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
    $("input[data-role='variation']").each (index, element) ->
      name = $(element).attr 'name'
      value = $(element).attr 'value'
      if name of parameters and parameters[name] == value
        $(element).attr 'checked', true
        $(element).click()

  updateImageCarousel: (variations) ->
    SelectVariationHelper.updateImageCarousel(variations)

  toogleVariationButtons: (buttonClicked, variations) ->
    button = $(buttonClicked)
    SelectVariationHelper.enableAllOptionButtons()
    for variation in variations
      if variation.qty_in_stock == 0 and variation.options_values.length == 1
        opt = variation.options_values[0]
        SelectVariationHelper
          .disableOptionButton($("input[type='radio'][value='#{opt}']"))
      else if variation.options_values.length > 1
        for opt in variation.options_values
          if opt != $(button).attr('value')
            SelectVariationHelper
            .disableOptionButton($("input[type='radio'][value='#{opt}']"))