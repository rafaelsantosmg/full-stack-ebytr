
# Projeto Ebytr

Projeto referente a Blitz de carreura da Trybe, onde fomos provocados a fazer uma aplicação Full-Stack para Criação, Edição e Deleção de Tarefas.

O objetivo foi disponibilizar um front-end para o colaborador se cadastrar e poder fazer controle das tarefas.
## Demo

[Link para demonstração da Aplicação](https://drive.google.com/file/d/1hCBdHdOj3w3T7vhaO-JigLeWxcHgmgPw/view?usp=sharing)


## Stack utilizada

**Front-end:** React.JS, React Hooks, Context, Bootstrap, React Router DOM, Jest, RTL.

**Back-end:** Node, Express, MySQL, Sequelize, Rescue, Joi, Chai, Mocha, Sinon.


## Aprendizados

Desenvolver uma API REST utilizando node com express e estrutura MSC(Model, Service, Controller) para controle de camadas.

Desenvolver um FrontEnd com React.Js

Desenvolver Testes Unitários para Front-End e Back-End
## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:rafaelsantosmg/project-ebytr.git
```

Entre no diretório do projeto

```bash
  cd project-ebytr.git
```

Instale as dependências

```bash
  npm install
```

Certifique de ter o docker e docker-compose instalado em sua maquina se precisar de ajuda com a instalação pode seguir a documentação para o mesmo!

Execute o comando

```bash
  npm run compose:up
```

Esse comando deve subir todos os containers necessários para funcionamento da Aplicação.

```bash
  npm run database
```

Esse comando cria o banco de dados no container para o correto funcionamento da API.

Abra seu navegador com caminho "http://localhost:3000/" e tudo pronto!

Basta cadastrar um novo usuário na seção "Criar usuário..." para que possa fazer o login e começar utilzar a aplicação.
## Rodando os testes

Para rodar os testes do backend, rode o seguintes comandos

```bash
  cd app/backend
```

```bash
  npm test
```

Para rodar os testes de cobertura.

```bash
  npm run test:mocha
```

Certifique de estar dentro da pasta app/backend para o correto funcionamento do script.