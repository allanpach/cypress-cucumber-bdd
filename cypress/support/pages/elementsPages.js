
const el = require('../elements/elementElements').elementElements

class Element {
    acessarMenuElements(){
        cy.get(el.menuElements).click()
    }

    acessarSubMenuWebTables(){
        cy.get(el.subMenuWebTables).click()
        cy.get(el.addNewRecordButton).should('exist').should('be.visible')
        
    }

    criarNovoRegistro(nome, sobreNome, email, idade, salario, departamento){
        cy.get(el.subMenuWebTables).click()
        cy.get(el.addNewRecordButton).click()
        cy.get(el.firstName).type(nome)
        cy.get(el.lastName).type(sobreNome)
        cy.get(el.email).type(email)
        cy.get(el.age).type(idade)
        cy.get(el.salary).type(salario)
        cy.get(el.department).type(departamento)
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