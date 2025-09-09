import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import element from '../../support/pages/elementsPages'
import global from '../../support/pages/globalPages'

Given("acessar home page DEMOQA", () => {
    global.acessarHome()
})

Given("que eu acesso a opção Elements", () => {
  element.acessarMenuElements()

})

When("acesso o submenu Web Tables", () => {
  element.acessarSubMenuWebTables()

})

Then("criar um novo registro", () => {
  element.criarNovoRegistro();

})

And("editar o novo registro criado", () => {
  element.editarRegistro()

})

And("deletar o novo registro criado", () => {
  element.deletarRegistro()

})
