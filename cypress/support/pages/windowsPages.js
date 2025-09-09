const el = require('../elements/windowsElements').windowElements

class WindowsPage {
    acessarMenuAlertsFrameWindows(){
        cy.get(el.menuWindows).click()
    }

    acessarBrowserWindows(){
        cy.get(el.subMenuBrowserWindows).click()
        cy.get(el.windowButton).should('exist').should('be.visible')
        
    }

    validarEfecharNovaJanela(){
        cy.get(el.windowButton).click()
        cy.window().then((win) => {
            win.location.href = 'https://demoqa.com/sample';
        });
        cy.url().should('include', 'https://demoqa.com/sample')
        cy.contains(el.tittleNewWindows).should('exist').should('be.visible')
    }
}
export default new WindowsPage()