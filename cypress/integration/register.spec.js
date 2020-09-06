/// <reference types="cypress" />

describe('Register a user and enter details', function () {
    it('Enter details for user registration and select checkbox', function () {
        cy.visit("http://demo.automationtesting.in/Register.html");

        cy.get("#checkbox1").check().should('be.checked').should('have.value', 'Cricket')
        cy.get("#checkbox1").uncheck().should('not.be.checked')

        cy.get("#checkbox2").check().should('be.checked').should('have.value', 'Movies')
        cy.get("#checkbox2").uncheck().should('not.be.checked')

        cy.get("#checkbox3").check().should('be.checked').should('have.value', 'Hockey')
        cy.get("#checkbox3").uncheck().should('not.be.checked')

        cy.get("input[type='checkbox']").check(['Cricket', 'Hockey'])
    })

    it('Enter details for user registration and select dropdown', function () {
        cy.visit("http://demo.automationtesting.in/Register.html");

        cy.get("#Skills").select('Android').should('have.value', 'Android')
    })

    it('Enter details for user registration and select multiselect', function () {
        cy.visit("http://demo.automationtesting.in/Register.html");

        cy.get("#msdd").click()
        cy.get(".ui-corner-all").contains('English').click()
        cy.get(".ui-corner-all").contains('Arabic').click()
    })

    it('Enter details for user registration and select search dropdown', function () {
        cy.visit("http://demo.automationtesting.in/Register.html");

        cy.get("[role=combobox]").click({force:true})
        cy.get(".select2-search__field").type('India')
        cy.get(".select2-search__field").type('{enter}')

    })

})

