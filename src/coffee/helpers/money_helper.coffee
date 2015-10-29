class @MoneyHelper

  @currency: (value) ->
    accounting.formatMoney(value)

  @value: (currency) ->
    accounting.unformat(currency, i18n.t('currency.decimal'))
