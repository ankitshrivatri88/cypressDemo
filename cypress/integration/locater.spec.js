/// <reference types="cypress" />

describe('Add an item to shopping cart', function () {
    it('Search for an item and add it to shopping cart', function () {
        cy.visit("https://demo.nopcommerce.com/");
        cy.get(".search-box-text").type("Apple MacBook Pro 13-inch")
        cy.get("[type='submit']").should('be.visible').should('be.enabled').click()
        cy.get(".product-box-add-to-cart-button[value='Add to cart']").click()
        cy.get("#product_enteredQuantity_4").clear().type("4")
        cy.get("#add-to-cart-button-4").click()
        cy.wait(5000)
        cy.get("#topcartlink > a > span.cart-label").click()
        cy.wait(5000)

        cy.get(".product-unit-price").contains('$1,800.00') //Assertions
        cy.get("#termsofservice").click()
        cy.get("#checkout[type='submit']").click()
        cy.url().should('eq','https://demo.nopcommerce.com/login/checkoutasguest?returnUrl=%2Fcart')
    })
})
