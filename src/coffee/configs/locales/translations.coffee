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
          cancel: 'cancelar'
          line_items: 'Itens no meu carrinho de compras:'
          line_item_added: 'Item adicionado ao carrinho de compras!'
          finish_buy: 'ir para o checkout'
          continue_shop: 'voltar para a loja'
          line_items_on_cart: 'Itens no meu carrinho de compras:'
          empty_cart: 'O carrinho está vazio'
          empty: 'vazio'
          remove: 'remover'
          confirm_remove: 'Tem certeza de que deseja remover este item?'
          update: 'atualizar'
          unavailable: 'indisponível'
          buy: 'adicionar ao carrinho'
          set_amount: 'Ajuste as quantidades dos produtos'
          close: 'Fechar'
          warning_quantity_unavailable: 'Aviso: Estoque limitado',
          product_qty_unavailable: 'O produto __product__ está com estoque limitado no momento.',
          warning_review_cart: 'Revise o seu carrinho de compras',
          product_unavailable: 'Produto(s) removido(s): um ou mais produtos estão esgotados e foram removidos do seu carrinho.',
          product_stock_changed: 'Aviso de estoque: um ou mais produtos estão com estoque reduzido. Atualizamos seu carrinho para a quantidade disponível.'
    'en':
      translation:
        number:
          decimal: ','
          thousand: '.'
        currency:
          symbol: '$'
          format: '%s %v'
          decimal: '.'
          thousand: ','
        cart:
          item:
            one: 'item'
            others: 'items'
          cancel: 'cancel'
          line_items: 'Items in my shopping cart:'
          line_item_added: 'Item added to cart'
          finish_buy: 'proceed to checkout'
          continue_shop: 'go back to store'
          line_items_on_cart: 'Items in my shopping cart:'
          empty_cart: 'Your shopping cart is empty'
          empty: 'empty'
          remove: 'remove'
          confirm_remove: 'Are you sure you want to remove this item?'
          update: 'update'
          buy: 'add to cart'
          unavailable: 'not available'
          set_amount: 'Review your items',
          close: 'Close'
          warning_quantity_unavailable: 'Note: Limited stock',
          product_qty_unavailable: '__product__ is under limited stock at the moment.',
          warning_review_cart: 'Review your shopping cart',
          product_unavailable: 'Out of stock: one or more items are no longer available and have been removed from your cart.',
          product_stock_changed: 'Stock alert: one or more items are in low stock. Your cart has been updated to the available amount.'