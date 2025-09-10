# Cypress Node Project

Este é um projeto de automação de testes utilizando o Cypress com Node.js. Projeto sendo desenvolvido no curso de Automação de testes com Cypress.

## Pré-requisitos

- Node.js: Certifique-se de ter o Node.js instalado em sua máquina. [Download Node.js](https://nodejs.org/)

## Clonando o Repositório

Para clonar este repositório, execute o seguinte comando no terminal:

```bash
git clone https://github.com/allanpach/cypress-cucumber-bdd.git
```

## Instalando o Projeto

Após clonar o repositório, navegue até o diretório do projeto e instale as dependências utilizando o npm:

```bash
cypress-cucumber-bdd
npm install
```

Isso irá instalar todas as dependências listadas no arquivo `package.json`, incluindo o Cypress.

## Executando os Testes

Para executar os testes no modo interativo ou modo com interface de usuário (UI), utilize o seguinte:
```bash
npm run test 
```
Para executar os testes no modo que gera allure-report, utilize o seguinte:
```bash
npm run browser:chrome
```
Para abrir o relatório allure-report, utilize o seguinte:
```bash
npm run report:allure
```

## Contribuindo

