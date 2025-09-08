Feature: Acessar home Demo QA
    Feature Description: Cenários voltado para os caminho felizes

Background:
    Given User navigate to home DEMOQA    

Scenario: Acessar a opção Forms
    Given que eu acesso a opção Forms na página DEMO QA
    When preencho os campos obrigatórios no Practice Form
    Then ao submeter o formulário deve fechar o popup

Scenario: Acessar a opção Alerts, Frame & Windows
    Given que eu acesso a opção Alerts, Frame & Windows
    When acesso o submenu Browser Windows
    Then validar nova janela foi aberta, com a msg “This is a sample page” para fechar

Scenario: Acessar a opção Elements
    Given que eu acesso a opção Elements
    When acesso o submenu Web Tables
    Then criar um novo registro
    And editar o novo registro criado
    And deletar o novo registro criado

Scenario: Acessar a opção Widgets
    Given que eu acesso a opção Widgets
    When acesso o submenu Progress Bar
    And clicar no botão Start
    Then parar antes dos 25%
    And apertar start novamente e ao chegar aos 100%, resetar a progress bar
    
Scenario: Acessar a opção Interactions
    Given que eu acesso a opção Interactions
    When acesso o submenu PSortable
    Then utilizando métodos de drag and drop, colocar os elementos na ordem crescente

