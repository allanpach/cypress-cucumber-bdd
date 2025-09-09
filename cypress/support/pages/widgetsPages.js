const el = require('../elements/widgetsElements').widgetsElements

class Widgets {
    acessarMenuWidgets(){
        cy.get(el.menuWidgets).click()
    }

    acessarSubMenuProgressBar(){
        cy.get(el.subMenuProgressBar).click()
        cy.get(el.startStopButton).should('exist').should('be.visible')
    }

    botaoStart(){
    cy.get(el.startStopButton).click();
 
    }

   pararProgressoAntesDe25(){
        cy.get(el.progress).contains('10').should('be.visible', { timeout: 1000 })
        cy.get(el.startStopButton).click();
        cy.get(el.progress)
            .invoke('attr', 'aria-valuenow') // Pega o valor do atributo 'aria-valuenow'
                .then(progressValue => {
        // Converte o valor de string para número
        const value = parseInt(progressValue);
        // Usa 'expect' para validar se o valor é menor ou igual a 25
        expect(value).to.be.lte(25);
        cy.log(`Validação bem-sucedida: o progresso de ${value}% é menor ou igual a 25%`);
        })   

    }

   finalizarProgresssoParaResetar(){
        cy.get(el.startStopButton).click();
        cy.get(el.progress,{ timeout: 20000 }).should('have.text', '100%')
        cy.get(el.resetButton).should('exist').should('be.visible').click()
        
    }

}
export default new Widgets()