const el = require('../elements/interactionsElements').interactionsElements

class Interactions {
    acessarMenuInteractions(){
        cy.get(el.menuInteractions).click()
    }

    acessarSubMenuPSortable(){
        cy.get(el.subMenuPSortable).click()
        cy.contains(el.tittleSortable).should('exist').should('be.visible')
    }

   dragAndDropCrescente(){
     // Seleciona o item que será arrastado (item "Two")
    const source = cy.get(el.listgroupItem).contains('Two');
    // Seleciona o alvo onde o item será solto (item "Four")
    const target = cy.get(el.listgroupItem).contains('Four');
    // Simula a ação de arrastar e soltar
    source
      .trigger('mousedown', { which: 1 }) // Inicia o "arrastar" (clique do botão esquerdo)
    target
      .trigger('mousemove')              // Simula o movimento do mouse
      .trigger('mouseup');               // Simula o "soltar" do elemento
      
    // Valida que a ação foi bem-sucedida verificando a nova ordem
    cy.get(el.listgroupItem).eq(3).should('contain.text', 'Two');

    }
}
export default new Interactions()