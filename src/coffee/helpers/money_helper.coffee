class @MoneyHelper
  accounting.settings = 
    currency: 
      symbol : "R$",   # default currency symbol is '$'
      format: "%s %v", # controls output: %s = symbol, %v = value/number (can be object: see below)
      decimal : ",",  # decimal point separator
      thousand: ".",  # thousands separator
      precision : 2   # decimal places
    number: 
      precision : 2,  # default precision on numbers is 0
      thousand: ",",
      decimal : "."

  @currency: (value) ->
    accounting.formatMoney(value)

  @value: (currency) ->
    accounting.unformat(currency, ',')
