class @SelectVariationController
  constructor: ->

  updateSalesPrice: (variations) ->
    if variations.length == 1
      SelectVariationHelper.updatePrice("div[data-role='sale-price']",
        MoneyHelper.currency(variations[0].sale_price))

  updateRegularPrice: (variations) ->
    if variations.length == 1
      SelectVariationHelper.updatePrice("div[data-role='regular-price']",
        MoneyHelper.currency(variations[0].regular_price))

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

  updateSelectedVariation: (variations) ->
    if variations.length == 1
      $("input[type='hidden'][name='variation_selected']").val(variations[0].id)

  toggleBuyButton: (variations)->
    if variations.length == 1
      if variations[0].is_virtual
        $("#buy-button").text($.t('cart.buy')).attr('disabled', false)
      else 
        if variations[0].qty_in_stock <= 0
          $("#buy-button").text($.t('cart.unavailable')).attr('disabled', true)
          $('.price-box .price-now, .price-box .price-old').html('')
          $('.backorder-info').show()
        else
          $("#buy-button").text($.t('cart.buy')).attr('disabled', false)
          $('.backorder-info').hide()