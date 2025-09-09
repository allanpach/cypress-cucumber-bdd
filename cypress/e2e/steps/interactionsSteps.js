import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import interactions from '../../support/pages/interactionsPages'
import global from '../../support/pages/globalPages'

Given("acessar home page DEMOQA", () => {
    global.acessarHome() 
})

Given("que eu acesso a opção Interactions", () => {
    interactions.acessarMenuInteractions()

})

When("acesso o submenu PSortable", () => {
    interactions.acessarSubMenuPSortable()
})

Then("utilizando métodos de drag and drop, colocar os elementos na ordem crescente", () => {
    interactions.dragAndDropCrescente()
})