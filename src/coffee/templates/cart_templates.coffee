class @CartTemplates
  @selectedVariation: (variation) ->
    attributes = ''
    for option in variation.options
      attributes = attributes + "<li>#{_.keys(option)[0]}: #{_.values(option)[0]}</li>"
    template = """
    <div class='modal fade' id='shopping_cart_modal' tabindex='-1' role='dialog'>
      <div class='modal-dialog' role='document'>
        <div class='modal-content'>
          <div class='modal-header'>
            <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>
            <h4 class='modal-title' id='myModalLabel'>#{i18n.t('cart.line_item_added')}</h4>
          </div>
          <div class='modal-body'>
            <div class="row">
              <div class="thumb col-xs-3">
                <img src='#{variation.thumb_url}' class="img-responsive">   
              </div>
              <div class="details col-xs-9">
                <h5 class="title">#{variation.product_name}</h5>
                <div class="price-now">#{MoneyHelper.currency(variation.sale_price)}</div>
                <div class="price-old">#{MoneyHelper.currency(variation.regular_price)}</div>
                <ul class="attributes">
                  #{attributes}
                </ul>
              </div>
            </div>
            <div class="row action-next">
              <div class="col-xs-9 col-xs-offset-3">
                <a href="/checkout" class="btn btn-primary checkout">#{i18n.t('cart.finish_buy')} »</a>
                <div class="keep-shopping"><a href="/" data-dismiss="modal">« #{i18n.t('cart.continue_shop')}</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
    """
    template

  @editCartItems: (line_items) ->
    template = """
    <div class='modal fade' id='shopping_cart_modal' tabindex='-1' role='dialog'>
      <div class='modal-dialog' role='document'>
        <div class='modal-content'>
          <div class='modal-header'>
            <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>
            <h4 class='modal-title' id='myModalLabel'>Ajuste as quantidades dos produtos</h4>
          </div>
          <div class='modal-body'>
            #{CartTemplates.cartItems(line_items)}    
            <div class="row action-next">
              <div class="col-xs-9">
                <div class="keep-shopping"><a href="/" data-dismiss="modal">« #{i18n.t('cart.continue_shop')}</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    """
    template

  @cartItems: (line_items) ->
    variation_tmp = ''
    if line_items.length is 0
      variation_tmp = @emptyCart()
    else
      for item in line_items
        variation = item.variation
        
        attributes = ''
        for option in item.variation.options
          attributes = attributes + "<li>#{_.keys(option)[0].trim()}: #{_.values(option)[0].trim()}</li>"
          
        variation_tmp = variation_tmp +
        variation_tmp= """
         <div class='item'>
          <div class='thumb col-xs-3'>
            <img src='#{variation.thumb_url}' alt='#{variation.product_name}'>
            <span class='remove-item'><a href='#' data-variation-id='#{variation.id}'><span class='remove'>#{i18n.t('cart.remove')}</span></a></span>
          </div>
          <div class='details col-xs-9'>
            <h5 class='title'><a href="#{variation.permalink}?#{@queryString(item)}">#{variation.product_name}</a></h5>
            <ul class='attributes'>
              #{attributes}
            </ul>
            <div class='quantity-price'>                    
              <div class='how-many'>
                <input type='button' class='less' value='-'>
                <input type="text"   class="qty" id="variation_qty_#{variation.id}" name="name" value="#{item.qty}" maxlength="2" />
                <input type="button" class="more" value="+" >
                <input type="hidden" name="variation_id" value="#{variation.id}" />
              </div>
              <div class='price'>
                <div class='amount'>
                  <p class='current-price'><span class="x">x </span>#{MoneyHelper.currency(variation.sale_price)}</p>
                  <p class='old-price'>#{MoneyHelper.currency(variation.regular_price)}</p>
                </div>
              </div>
            </div>
            <a href="javascript:void(0)" class="item_update_qty"><i class="fa fa-refresh"></i> #{i18n.t('cart.update')}</a>
            <div class='total-price'>
              <p class='current-price'>#{MoneyHelper.currency(item.qty * variation.sale_price)}</p>
              <p class='old-price'>#{MoneyHelper.currency(item.qty * variation.regular_price)}</p>
            </div>
          </div>
        </div>
        """
    if line_items.length is  0
      checkout_button = ''
    else
      checkout_button = """<a href="/checkout" id="checkout-button" class="btn btn-primary">#{i18n.t('cart.finish_buy')} »</a>"""
    template = """
    <div class="panel panel-default">
      <div class="loading"></div>
      <div class="panel-heading">
        <h4 class="panel-title">#{i18n.t('cart.line_items')} </h4>
      </div>
      <div class="panel-body">
        #{variation_tmp}
      </div>
      <div class="panel-footer">
        <div class="row">
          <div class="col-xs-5 subtotal">
            <h5>Subtotal</h5>
            <p>R$ 0,00</p>
          </div>
          <div class="col-xs-7 action-checkout text-right">
            #{checkout_button}
          </div>
        </div>
      <div>
    </div>
    """
    template

  @unavailableVariation: (variation) ->
    template = """
    <div class='modal fade' id='shopping_cart_modal' tabindex='-1' role='dialog'>
      <div class='modal-dialog' role='document'>
        <div class='modal-content'>
          <div class='modal-header'>
            <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>
            <h4 class='modal-title' id='myModalLabel'>Aviso: Quantidade indisponível em estoque</h4>
          </div>
          <div class='modal-body'>
            <div class="row">
              <div class="details col-xs-9">
                <h5 class="title">A quantidade selecionada para o produto #{variation.product_name} está indisponível no estoque</h5>
              </div>
            </div>
            <div class="row action-next">
              <div class="col-xs-9">
                <div class="keep-shopping"><a href="/" data-dismiss="modal">« #{i18n.t('cart.continue_shop')}</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
    """
    template

  @reviewCartItems: ->
    template = """
    <div class='modal fade' id='shopping_cart_modal' tabindex='-1' role='dialog'>
      <div class='modal-dialog' role='document'>
        <div class='modal-content'>
          <div class='modal-header'>
            <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>
            <h4 class='modal-title' id='myModalLabel'>Aviso: Revise o seu carrinho de compras</h4>
          </div>
          <div class='modal-body'>
            <div class="row">
              <div class="details col-xs-9">
                <h5 class="title">Algum produto em seu carrinho de compras está com a quantidade em estoque indisponível.</h5>
              </div>
            </div>
            <div class="row action-next">
              <div class="col-xs-9">
                <div class="keep-shopping"><a href="/" data-dismiss="modal">« #{i18n.t('cart.continue_shop')}</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
    """
    template    

  @queryString: (item) ->
    queryString = ''
    for option in item.variation.options
      queryString = queryString + "#{_.keys(option)[0]}=#{_.values(option)[0]}"
      unless option is _.last(item.variation.options)
        queryString = queryString + "&"
    queryString

  @emptyCart: ->
    empty = """
      <div class="empty-cart">
        <div>#{i18n.t('cart.empty_cart')}</div>
      </div>
      """