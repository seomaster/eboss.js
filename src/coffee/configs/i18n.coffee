class @I18n
  constructor: () ->
    i18n.init({
      lng: document.documentElement.lang,
      fallbackLng: 'pt-BR',      # Fallback Language
      useCookie: false,          # Disable cookie usage
      useLocalStorage: false,    # Disable localStorage usage
      resStore: Translations.locales()
    })
    accounting.settings = 
      currency: 
        symbol : i18n.t('currency.symbol'), # default currency symbol is '$'
        format: i18n.t('currency.format'), # controls output: %s = symbol, %v = value/number (can be object: see below)
        decimal : i18n.t('currency.decimal'),  # decimal point separator
        thousand: i18n.t('currency.thousand'), # thousands separator
        precision : 2   # decimal places
      number: 
        precision : 2,  # default precision on numbers is 0
        thousand: i18n.t('number.thousand'),
        decimal : i18n.t('number.decimal')