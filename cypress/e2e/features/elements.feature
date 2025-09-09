Feature: Criar, editar e excluir registors 
    Feature Description: Cenários voltado para os caminho felizes

Background:
    Given acessar home page DEMOQA    

Scenario: Acessar a opção Elements
    Given que eu acesso a opção Elements
    When acesso o submenu Web Tables
    Then criar um novo registro
    And editar o novo registro criado
    And deletar o novo registro criado