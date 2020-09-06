describe('My test suite', function () {
    it('verify title of web page- Positive scneario', function () {
        cy.visit("https://demo.nopcommerce.com/");
        cy.title().should('eq', 'nopCommerce demo store');
    })

    it.skip('verify title of web page- Negative scneario', function () {
        cy.visit("https://demo.nopcommerce.com/");
        cy.title().should('eq', 'Google demo store');
    })
})
