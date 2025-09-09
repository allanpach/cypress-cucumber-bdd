Feature: Validar e fechar janela do navegador
    Feature Description: Cenários voltado para os caminho felizes

Background:
    Given acessar home page DEMOQA    

Scenario: Acessar a opção Alerts, Frame & Windows
    Given que eu acesso a opção Alerts, Frame & Windows
    When acesso o submenu Browser Windows
    Then validar nova janela foi aberta, com a msg “This is a sample page” para fechar