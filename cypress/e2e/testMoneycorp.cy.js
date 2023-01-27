describe('Moneycorp UI validations', () => {
    it.only("Moneycorp UI validations", () => {
        
        //Open webpage to test
        cy.visit("https://www.moneycorp.com/en-gb/")
        
        //Select language as USA
        cy.get('#language-dropdown-flag').click()
        cy.wait(2000)
        cy.get('[aria-label="USA English"]').click()   
        
        //Validate language is selected as USA
        cy.get("#language-dropdown-flag").find('img')
            .should("have.attr",'src',"/globalassets/images/icons/flags/united-states-of-america.svg")   
        
        //cy.xpath('//h3[contains(.,"Foreign exchange solutions")]')
        cy.get('[href="/en-us/business/foreign-exchange-solutions/"][aria-label="Find out more "]').click()

        //Verify you've arrived the right page using title
        cy.title().should('eq', 'Foreign Exchange Solutions | moneycorp USA')

        //Search for International Payments
        cy.wait(1000)
        cy.get("[aria-label='Menu']").click()
        cy.get("#nav_search").type("International Payments")
        .parent().find("[type='submit']").click()

        //Verify Search result page is displayed for "International Payments"
        cy.title().should('eq', 'Search')

        //Or Click each link and check the URL contains https://www.moneycorp.com/en-us
        cy.get('.results').find("a").each(($el) => {
            cy.wait(1000)
            cy.get($el)
            cy.url().should("contains", "https://www.moneycorp.com/en-us/")
            cy.wait(1000)
        })    
  })
})