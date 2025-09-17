import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import form from '../../support/pages/formsPages'
import global from '../../support/pages/globalPages'

Given("acessar home page DEMOQA", () => {
  global.acessarHome()
})

Given("que eu acesso a opção Forms na página DEMO QA", () => {
  form.acessarMenuForms()
})

When("preencho os campos obrigatórios no Practice Form {string}, {string}, {string}, {string}, {string}, {string}, {string}", (nome, sobreNome, email, telefone, subj, arquivo, endereco   ) => {
  form.preencherPraticeForm(nome, sobreNome, email, telefone, subj, arquivo, endereco)
})

Then("ao submeter o formulário deve fechar o popup", () => {
form.submeterFormulario()
})