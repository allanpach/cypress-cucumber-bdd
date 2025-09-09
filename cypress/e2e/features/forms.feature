Feature: Submeter formulário ao preencher
    Feature Description: Cenários voltado para os caminho felizes

Background:
    Given acessar home page DEMOQA    

Scenario: Acessar a opção Forms
    Given que eu acesso a opção Forms na página DEMO QA
    When preencho os campos obrigatórios no Practice Form
    Then ao submeter o formulário deve fechar o popup