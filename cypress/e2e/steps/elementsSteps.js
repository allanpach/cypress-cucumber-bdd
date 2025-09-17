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

Then("criar um novo registro {string}, {string}, {string}, {string}, {string}, {string}", (nome, sobreNome, email, idade, salario, departamento) => {
  element.criarNovoRegistro(nome, sobreNome, email, idade, salario, departamento);

})

And("editar o novo registro criado {string}", (editName) => {
  element.editarRegistro(editName)

})

And("deletar o novo registro criado", () => {
  element.deletarRegistro()

})

