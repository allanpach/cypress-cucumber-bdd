import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


Given("User navigate to home DEMOQA", () => {
    cy.visit( 'https://demoqa.com/')
    cy.viewport(1920, 1080) // Define o tamanho da viewport para Full HD
    
})

Given("que eu acesso a opção Forms na página DEMO QA", () => {
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
    cy.get(".subjects-auto-complete__value-container").type("testeteste teste")
    cy.get("#hobbiesWrapper > .col-md-9 > :nth-child(1)").click()
    cy.get("[type='file']").selectFile('test.txt')
    cy.get("#currentAddress").type("rua brazil, 1222 brasil, sp")
    cy.get("#stateCity-wrapper > :nth-child(2)").click()
    cy.get("#react-select-3-option-0").click();
    cy.get("#stateCity-wrapper > :nth-child(3)").click()
    cy.get("#react-select-4-option-0").click();

})

Then("ao submeter o formulário deve fechar o popup", () => {
    cy.get("#submit").click();
    cy.get("#example-modal-sizes-title-lg").should('exist').should('be.visible')
    cy.get("#closeLargeModal").click();
    
})

Given("que eu acesso a opção Alerts, Frame & Windows", () => {
  cy.get(".category-cards > :nth-child(3)").click();

})

When("acesso o submenu Browser Windows", () => {
    cy.get(":nth-child(3) > .element-list > .menu-list > #item-0").click()
    cy.get("#windowButton").should('exist').should('be.visible')
})

Then("validar nova janela foi aberta, com a msg “This is a sample page” para fechar", () => {
    cy.get("#windowButton").click()
    cy.window().then((win) => {
      win.location.href = 'https://demoqa.com/sample';
      });
       cy.url().should('include', 'https://demoqa.com/sample')
   cy.contains("This is a sample page").should('exist').should('be.visible')
})

Given("que eu acesso a opção Elements", () => {
  cy.get(".category-cards > :nth-child(1)").click();

})

When("acesso o submenu Web Tables", () => {
    cy.get(":nth-child(1) > .element-list > .menu-list > #item-3").click()
    cy.get("#addNewRecordButton").should('exist').should('be.visible')
})

Then("criar um novo registro", () => {
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

And("editar o novo registro criado", () => {
    cy.contains("Allan").should('exist').should('be.visible')
    cy.get("#searchBox").click().type("Allan")
    cy.get('[title="Edit"]').click();
    cy.get("#firstName").clear().type("AllanEdit")
    cy.get("#submit").click()

})

And("deletar o novo registro criado", () => {

    cy.contains("Allan").should('exist').should('be.visible')
    cy.get("#searchBox").click().clear().type("Allan")
    cy.get('[title="Delete"]').click(); 
  
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
     
Given("que eu acesso a opção Widgets", () => {
    cy.get(":nth-child(4) > :nth-child(1) > .card-up").click();
   
})

When("acesso o submenu Progress Bar", () => {
    cy.get(":nth-child(4) > .element-list > .menu-list > #item-4").click()
    cy.get("#progressBarContainer").should('exist').should('be.visible')

})

And("clicar no botão Start", () => {
    cy.get('#startStopButton').click();
   
 })

Then("parar antes dos 25%", () => {
  cy.get('.progress-bar').contains('10').should('be.visible', { timeout: 1000 })
  cy.get('#startStopButton').click();

  cy.get('.progress-bar')
  .invoke('attr', 'aria-valuenow') // Pega o valor do atributo 'aria-valuenow'
  .then(progressValue => {
    // Converte o valor de string para número
    const value = parseInt(progressValue);

    // Usa 'expect' para validar se o valor é menor ou igual a 25
    expect(value).to.be.lte(25);
    cy.log(`Validação bem-sucedida: o progresso de ${value}% é menor ou igual a 25%`);
  })   
})

And("apertar start novamente e ao chegar aos 100%, resetar a progress bar", () => {
    cy.get('#startStopButton').click();
   cy.get('.progress-bar',{ timeout: 20000 }).should('have.text', '100%')
   cy.get('#resetButton').should('exist').should('be.visible').click()

 });

Given("que eu acesso a opção Interactions", () => {
  cy.get(".category-cards > :nth-child(5) > :nth-child(1)").click();

})

When("acesso o submenu PSortable", () => {
    cy.get(":nth-child(5) > .element-list > .menu-list > #item-0").click()
    cy.contains("Sortable").should('be.visible')
})

Then("utilizando métodos de drag and drop, colocar os elementos na ordem crescente", () => {
     // Seleciona o item que será arrastado (item "Two")
    const source = cy.get('.list-group-item').contains('Two');
    // Seleciona o alvo onde o item será solto (item "Four")
    const target = cy.get('.list-group-item').contains('Four');
    // Simula a ação de arrastar e soltar
    source
      .trigger('mousedown', { which: 1 }) // Inicia o "arrastar" (clique do botão esquerdo)
    target
      .trigger('mousemove')              // Simula o movimento do mouse
      .trigger('mouseup');               // Simula o "soltar" do elemento
      
    // Valida que a ação foi bem-sucedida verificando a nova ordem
    cy.get('.list-group-item').eq(3).should('contain.text', 'Two');
})