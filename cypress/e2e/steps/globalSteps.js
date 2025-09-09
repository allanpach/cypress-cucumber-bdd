import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import windows from '../../support/pages/globalPages'

Given("acessar home page DEMOQA", () => {
    cy.visit( 'https://demoqa.com/')
    cy.viewport(1920, 1080) // Define o tamanho da viewport para Full HD    
})

And("eu preencho o formulário com o nome {string} e o email {string}", () => {
    cy.get(":nth-child(1) > .element-list > .menu-list > #item-3").click()
    cy.get("#addNewRecordButton").click()
    cy.get("#firstName").type("Allan")
    cy.get("#lastName").type("Vale")
    cy.get("#userEmail").type("teste@teste.com")
    cy.get("#age").type("19")
    cy.get("#salary").type("9000")
    cy.get("#department").type("QA")
    cy.get("#submit").click()
  
})