Feature: Criar, editar e excluir registors 
    Feature Description: Cenários voltado para os caminho felizes

Background:
    Given acessar home page DEMOQA    

Scenario Outline: Acessar a opção Elements
    Given que eu acesso a opção Elements
    When acesso o submenu Web Tables
    Then criar um novo registro "<nome>", "<sobreNome>", "<email>", "<idade>", "<salario>", "<departamento>"
    And editar o novo registro criado "<editName>"
    And deletar o novo registro criado

        Examples:
        | nome | sobreNome | email         | idade |salario|departamento |editName |
        | Allan| Vale      | este@teste.com|19     |9000   |QA           |AllanEdit|

