describe('Search International Payments', () => {
    it.only("Validate the dropdown option selection by it's text", () => {
        
        cy.visit("https://www.moneycorp.com/en-us/search/?q=international+payments")

        //Verify Search result page is displayed for "International Payments"
        cy.title().should('eq', 'Search')

        //Verify the Search result URLs contain "/en-us/" -- using DOM
        cy.get('.results').find("a").each(($el) => {
            cy.wrap($el).should('have.attr', "href").should("contain", "/en-us/")
        })

        //Click each link and check the URL contains https://www.moneycorp.com/en-us
        cy.get('.results').find("a").each(($el) => {
            cy.wait(1000)
            cy.get($el)
            cy.url().should("contains", "https://www.moneycorp.com/en-us/")
            cy.wait(1000)
        })    
    })
})