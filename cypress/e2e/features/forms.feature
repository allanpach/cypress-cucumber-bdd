Feature: Submeter formulário ao preencher
    Feature Description: Cenários voltado para os caminho felizes

Background:
    Given acessar home page DEMOQA    

Scenario Outline: Acessar a opção Forms
    Given que eu acesso a opção Forms na página DEMO QA
    When preencho os campos obrigatórios no Practice Form "<nome>", "<sobreNome>", "<email>", "<telefone>", "<subj>", "<arquivo>", "<endereco>"
    Then ao submeter o formulário deve fechar o popup
    Examples:
        | nome | sobreNome | email         | telefone |subj      |arquivo |endereco                   |
        | Allan| Vale      | este@teste.com|1199999099|testeteste|test.txt|rua brazil, 1222 brasil, sp|