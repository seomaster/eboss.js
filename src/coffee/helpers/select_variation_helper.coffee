class @SelectVariationHelper
  @updatePrice: (element, price) ->
    if price != null
      $(element).text(price)

  @currentURL: () ->
    document.URL

  @addParameterToURL: (param, value) ->
    #Assuming that the url is the current URL
    url = @currentURL()

    # Using a positive lookahead (?=\=) to find the
    # given parameter, preceded by a ? or &, and followed
    # by a = with a value after than (using a non-greedy selector)
    # and then followed by a & or the end of the string
    val = new RegExp('(\\?|\\&)' + param + '=.*?(?=(&|$))')
    qstring = /\?.+$/
    # Check if the parameter exists
    if val.test(url)
      # if it does, replace it, using the captured group
      # to determine & or ? at the beginning
      url =  url.replace(val, '$1' + param + '=' + value)
    else if qstring.test(url)
      # otherwise, if there is a query string at all
      # add the param to the end of it
      url =  url + '&' + param + '=' + value
    else
      # if there's no query string, add one
      url = url + '?' + param + '=' + value
    window.history.replaceState(url, "Title", url)

  @getURLParameters: ->
    queryString = window.location
      .search.substr(window.location.search.indexOf("?") + 1)
    params = queryString.split("&")
    hash = {}
    for param in params
      p = param.split '='
      hash[p[0]] = p[1]
    hash

  @enableAllOptionButtons: ->
    radio_buttons = $("input[data-role='variation']:not([disabled=true])")
    radio_buttons.attr 'disabled', false
    radio_buttons.closest('li')
      .removeClass('unavailable').removeAttr('title')
  
  @disableOptionButton: (button) ->
    $(button).attr('disabled', true).prop 'checked', false
    $(button).closest('li').removeClass('active')
      .addClass('unavailable')
      .attr('title', 'Indisponível')
  
  @carouselIsDefined: ->
    $("div#image-big").length != 0 and $('div#thumb-nav').length != 0

  @updateImageCarousel: (variations) ->
    if @carouselIsDefined()
      if variations.length == 1
        variation = variations[0]
        images = variation.variation_images
        $('div#image-big').hide().empty()
        $('div#thumb-nav').hide().empty()
        huges = []
        thumbs = []
        for image in images
          huges.push($('div#huge-placeholder')
            .find("div[data-huge='variation_#{image}']").clone())
          thumbs.push($('div#thumb-placeholder')
            .find("div[data-thumb='variation_#{image}']").clone())

        $("div#image-big").append(huges)
        $("div#thumb-nav").append(thumbs)
        $('.slide-full').data('owlCarousel').reinit()
        $('.slide-thumb').data('owlCarousel').reinit()