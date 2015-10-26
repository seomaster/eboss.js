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
          set_amount: 'Ajuste as quantidades dos produtos.'
          save: 'Salvar carrinho'
          warning_quantity_unavailable: 'Aviso: Quantidade indisponível em estoque'
          product_qty_unavailable: 'A quantidade selecionada para o produto __product__ está indisponível no estoque.'
          warning_review_cart: 'Aviso: Revise o seu carrinho de compras'
          product_unavailable: 'Produto com estoque zerado: Seu carrinho precisou ser atualizado, pois um ou mais produtos esgotaram e foram removidos.'
          product_stock_changed: 'Produto com estoque alterado: Seu carrinho precisou ser atualizado, pois um ou mais produtos tiveram o estoque alterado.'
    'en':
      translation:
        cart:
          item:
            one: 'item'
            others: 'items'
          cancel: 'cancel'
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
          set_amount: 'Ajuste as quantidades dos produtos.'
          save: 'Save'
          warning_quantity_unavailable: 'Note: that amount is not available in our stock.'
          product_qty_unavailable: 'The desired amount for __product__ is not available at the moment.'
          warning_review_cart: 'Note: please review your shopping cart.'
          product_unavailable: 'Out of stock: one or more items are no longer available and have been removed. Your cart has been updated.'
          product_stock_changed: 'Stock alert: one or more items are in low stock. Your cart has been updated to the maximum available amount.'