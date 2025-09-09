Feature: Validar progresso da barra de carregamento 
    Feature Description: Cenários voltado para os caminho felizes

Background:
    Given acessar home page DEMOQA    

Scenario: Acessar a opção Widgets
    Given que eu acesso a opção Widgets
    When acesso o submenu Progress Bar
    And clicar no botão Start
    Then parar antes dos 25%
    And apertar start novamente e ao chegar aos 100%, resetar a progress bar