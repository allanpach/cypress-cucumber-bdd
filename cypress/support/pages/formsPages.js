const el = require('../elements/formsElements').formElements

class FormPage {
    acessarMenuForms(){
     cy.contains(el.menuForms).click()
    }

    preencherPraticeForm(nome, sobreNome, email, telefone, subj, arquivo, endereco){
        cy.get(el.subMenuPracticeForm).click()
        cy.get(el.submit).should('exist').should('be.visible')
        cy.get(el.firstName).type(nome)
        cy.get(el.lastName).type(sobreNome)
        cy.get(el.email).type(email)
        cy.get(el.mobile).type(telefone)
        cy.get(el.gender).click()
        cy.get(el.subjects).type(subj)
        cy.get(el.hobbie).click()
        cy.get(el.selctPicture).selectFile(arquivo)
        cy.get(el.currentAddress).type(endereco)
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