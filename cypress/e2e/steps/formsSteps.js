import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("que eu acesso o a opção Forms na página DEMO QA", () => {
    cy.visit( 'https://demoqa.com/')
    cy.viewport(1920, 1080) // Define o tamanho da viewport para Full HD
    cy.get(":nth-child(2) > :nth-child(1) > .card-up").click();
})

When("preencho os campos obrigatórios no Practice Form", () => {
    cy.get(":nth-child(2) > .element-list > .menu-list > #item-0").click()
    cy.get("#userNumber").should('exist').should('be.visible')
    cy.get("#firstName").type("Allan")
    cy.get("#lastName").type("Vale")
    cy.get("#userEmail").type("teste@teste.com")
    cy.get("#userNumber").type("1199999099")
    cy.get("#genterWrapper > .col-md-9 > :nth-child(1)").click()
  //  cy.get("#dateOfBirthInput").clear()
  //  cy.get("#dateOfBirthInput").click().type("11 May 1990")
    cy.get(".subjects-auto-complete__value-container").type("testeteste teste")
    cy.get("#hobbiesWrapper > .col-md-9 > :nth-child(1)").click()
    cy.get("[type='file']").selectFile('test.txt')
    cy.get("#currentAddress").type("rua brazil, 1222 brasil, sp")
    cy.get("#stateCity-wrapper > :nth-child(2)").click()
    cy.get("#react-select-3-option-0").click();
    cy.get("#stateCity-wrapper > :nth-child(3)").click()
    cy.get("#react-select-4-option-0").click();
    cy.get("#submit").click();
    cy.get("#example-modal-sizes-title-lg").should('exist').should('be.visible')
    cy.get("#closeLargeModal").click();

    


    /*
    "fName":,
    "lName":",
    "email":"#userEmail",
    "celphone":"#userNumber",
    "gender":"#genterWrapper > .col-md-9 > :nth-child(1)",
    "birth":"#dateOfBirthInput",
    "subjects":".subjects-auto-complete__value-container",
    "address":"#currentAddress"
    */

})

Then("submeter o formulário deve fechar o popup", () => {
    
})

