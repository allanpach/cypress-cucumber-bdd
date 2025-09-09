import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import windows from '../../support/pages/windowsPages'
import global from '../../support/pages/globalPages'

Given("acessar home page DEMOQA", () => {
  global.acessarHome()
})

Given("que eu acesso a opção Alerts, Frame & Windows", () => {
  windows.acessarMenuAlertsFrameWindows()
})

When("acesso o submenu Browser Windows", () => {
  windows.acessarBrowserWindows()
})

Then("validar nova janela foi aberta, com a msg “This is a sample page” para fechar", () => {
  windows.acessarBrowserWindows()
})
