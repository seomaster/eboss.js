class @CartTemplates
  @selectedVariation: (variation) ->
    template = "<div id='selected_variation' class='modal fade'>"+
      "<div class='modal-header'><a class='close' data-dismiss='modal'>x</a>"+
        "<h3>Item adicionado ao carrinho de compras!</h3>"+
      "</div>"+
      "<div class='modal-body'>"+
        "<p><img src='#{variation.thumb_url}'></p>"+
        "<p>#{variation.product_name}</p>"+
        "<p>#{variation.regular_price_formatted}</p>"
    template = template + "<p>#{key}</p>" for key in variation.options_values
    template = template + "</div></div>"
    template

  @cartItems: (line_items) ->
    template = "<div id='selected_variation' class='modal fade'>"+
      "<div class='modal-header'><a class='close' data-dismiss='modal'>x</a>"+
        "<h3>Item adicionado ao carrinho de compras!</h3>"+
      "</div><div class='modal-body'>"
    variation_tmp = ''
    for item in line_items
      variation = item.variation
      variation_tmp = variation_tmp +
      "<div><p><img src='#{variation.thumb_url}'></p>"+"
      <p>#{variation.product_name}</p>"+
      "<p>Quantidade: #{item.qty}</p>"+"
      <p>#{variation.regular_price_formatted}</p>"
      for key in variation.options_values
        variation_tmp = variation_tmp + "<p>#{key}</p>"
      variation_tmp = variation_tmp + "</div>"
    template = template + variation_tmp + "</div></div>"
    template