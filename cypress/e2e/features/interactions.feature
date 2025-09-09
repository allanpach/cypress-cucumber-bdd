Feature: Validar ordem dos elementos
    Feature Description: Cenários voltado para os caminho felizes

Background:
    Given acessar home page DEMOQA    

Scenario: Acessar a opção Interactions
    Given que eu acesso a opção Interactions
    When acesso o submenu PSortable
    Then utilizando métodos de drag and drop, colocar os elementos na ordem crescente

