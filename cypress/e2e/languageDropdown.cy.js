describe('Language Dropdown validations', () => {
    it.only("Validate the dropdown option selection by it's text", () => {
        
        cy.visit("https://www.moneycorp.com/en-gb/")

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
        cy.wait(4000)
        cy.xpath('//div[contains(@class, "nav-search-bar")]').find("input").first().invoke('show').type("International Payments", {force: true})
        cy.xpath('//div[contains(@class,"u-flex u-flex-align-center u-flex-justify-end")]').find('form').within(() => {
            cy.get('[type="submit"]').invoke('show')
            cy.wait(1000)
            cy.get('[type="submit"]').type("International Payments", {force: true})
            cy.wait(1000)
            //cy.get('[type="submit"]').click({force: true})
        })
  })
})