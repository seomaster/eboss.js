describe 'MoneyHelper', ->
  
  it 'to be defined', ->
    expect(MoneyHelper).toBeDefined()

  describe 'currency', ->
    it 'format number to currency defined', ->
      expect(MoneyHelper.currency(200.0)).toBe '$200.00'
      
  describe 'value', ->
    it 'unformat the currency to value', ->
      expect(MoneyHelper.value('R$ 200,00')).toBe 200.00
      expect(MoneyHelper.value('R$ 2.000,00')).toBe 2000.00
