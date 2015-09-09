class @MoneyHelper

  @currency: (value) ->
    accounting.formatMoney(value)

  @value: (currency) ->
    accounting.unformat(currency, ',')
