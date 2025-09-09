const el = require('../elements/formsElements').formElements

class FormPage {
    acessarMenuForms(){
     cy.contains(el.menuForms).click()
    }

    preencherPraticeForm(){
        cy.get(el.subMenuPracticeForm).click()
        cy.get(el.submit).should('exist').should('be.visible')
        cy.get(el.firstName).type("Allan")
        cy.get(el.lastName).type("Vale")
        cy.get(el.email).type("teste@teste.com")
        cy.get(el.mobile).type("1199999099")
        cy.get(el.gender).click()
        cy.get(el.subjects).type("testeteste teste")
        cy.get(el.hobbie).click()
        cy.get(el.selctPicture).selectFile('test.txt')
        cy.get(el.currentAddress).type("rua brazil, 1222 brasil, sp")
        cy.get(el.clickState).click()
        cy.get(el.selectState).click();
        cy.get(el.clickCity).click()
        cy.get(el.selectCity).click(); 

    }
    submeterFormulario(){
        cy.get(el.submit).click();
        cy.get(el.modalConfirme).should('exist').should('be.visible')
        cy.get(el.closeModalConfirme).click();
    }
}
export default new FormPage()