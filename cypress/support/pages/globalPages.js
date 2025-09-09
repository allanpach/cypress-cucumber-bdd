const el = require('../elements/globalElements').globalElements

class GlobalPage {
    acessarHome(){
       cy.visit( 'https://demoqa.com/')
       cy.viewport(1920, 1080) // Define o tamanho da viewport para Full HD    
    }
}
export default new GlobalPage()