import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import widgets from '../../support/pages/widgetsPages'
import global from '../../support/pages/globalPages'

Given("acessar home page DEMOQA", () => {
    global.acessarHome() 
})

Given("que eu acesso a opção Widgets", () => {
    widgets.acessarMenuWidgets()
})

When("acesso o submenu Progress Bar", () => {
    widgets.acessarSubMenuProgressBar()
})

And("clicar no botão Start", () => {
    widgets.botaoStart()
 })

Then("parar antes dos 25%", () => {
    widgets.pararProgressoAntesDe25() 
})

And("apertar start novamente e ao chegar aos 100%, resetar a progress bar", () => {
    widgets.finalizarProgresssoParaResetar() 
});
