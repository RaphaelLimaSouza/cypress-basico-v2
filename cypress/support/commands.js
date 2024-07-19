Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    const longText = 'teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste, teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste'
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    cy.get('#firstName').type('teste')
    cy.get('#lastName').type('teste')
    cy.get('#email').type('teste@teste.com')
    cy.get('#phone').type('123456789')
    cy.get('#open-text-area').type(longText, { delay: 0 })
    cy.contains('button','Enviar').click() 
})