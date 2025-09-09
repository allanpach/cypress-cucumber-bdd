const el = require('../elements/elementElements').elementElements

class Element {
    acessarMenuElements(){
        cy.get(el.menuElements).click()
    }

    acessarSubMenuWebTables(){
        cy.get(el.subMenuWebTables).click()
        cy.get(el.addNewRecordButton).should('exist').should('be.visible')
        
    }

    criarNovoRegistro(){
        cy.get(el.subMenuWebTables).click()
        cy.get(el.addNewRecordButton).click()
        cy.get(el.firstName).type("Allan")
        cy.get(el.lastName).type("Vale")
        cy.get(el.email).type("teste@teste.com")
        cy.get(el.age).type("19")
        cy.get(el.salary).type("9000")
        cy.get(el.department).type("QA")
        cy.get(el.submit).click()
 
    }

    editarRegistro(){
        cy.contains(el.searcName).should('exist').should('be.visible')
        cy.get(el.searchBox).click().type(el.searcName)
        cy.get(el.editButton).click();
        cy.get(el.firstName).clear().type("AllanEdit")
        cy.get(el.lastName).click()
        cy.get(el.submit).click()

    }

    deletarRegistro(){
        cy.contains(el.searcName).should('exist').should('be.visible')
        cy.get(el.searchBox).click().clear().type(el.searcName)
        cy.get(el.deletButton).click(); 
    
    }
}
export default new Element()