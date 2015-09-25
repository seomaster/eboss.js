class @Translations
  @locales: -> 
    'pt-BR':
      translation:
        number:
          decimal: '.'
          thousand: ','
        currency:
          symbol: 'R$'
          format: '%s %v'
          decimal: ','
          thousand: '.'
        cart:
          item:
            one: 'item'
            others: 'itens'
          line_items: 'Itens no meu carrinho de compras:'
          line_item_added: 'Item adicionado ao carrinho de compras!'
          finish_buy: 'finalizar compra'
          continue_shop: 'continuar navegando'
          line_items_on_cart: 'Itens no meu carrinho de compras:'
          empty_cart: 'O carrinho está vazio'
          empty: 'vazio'
          remove: 'remover'
          confirm_remove: 'Tem certeza de que deseja remover este item?'
          update: 'atualizar'
          unavailable: 'indisponível'
          buy: 'adicionar ao carrinho'
    'en':
      translation:
        cart:
          item:
            one: 'item'
            others: 'items'
          line_items: 'Items in my shopping cart:'
          line_item_added: 'Item added to cart'
          finish_buy: 'proceed to checkout'
          continue_shop: 'continue shopping'
          line_items_on_cart: 'Items in my shopping cart:'
          empty_cart: 'Your shopping cart is empty'
          empty: 'empty'
          remove: 'remove'
          confirm_remove: 'Are you sure you want to remove this item?'
          update: 'update'
          buy: 'add to cart'
          unavailable: 'not available'