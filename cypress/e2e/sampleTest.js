
describe('Sample test', () => {
    it('PositiveOne', () => {
      cy.visit("https://www.moneycorp.com/en-gb/")
      cy.title().should('eq', 'Moneycorp | Global Payments')
    })

    it('NegativeOne', () => {
      cy.visit("https://www.moneycorp.com/en-gb/")
      cy.title().should('eq', 'Moneycorp | Global Pay')
      })
  })