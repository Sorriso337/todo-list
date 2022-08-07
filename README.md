<h1 align="center"> Todo list ✔ </h1>


## 📚 Descrição do Projeto

Esse projeto é uma estrutura para aplicação de conhecimentos que tem como objetivo treinar e aprender boas práticas no desenvolvimento de um programa em ReactJS consumindo uma API em Node com sequelize, o mesmo tem como ideia uma aplicação que possibilita um usuário criar sua conta e criar e gerenciar sua própria lista de TO-DO's com descrição e datas, fazer filtragem por Tarefas atrasadas e também um acesso de administrador para verificar todas as tarefas, situação atual das mesmas e quem as criou, além de também poder definir tarefas.

## 🔢 Programas e Versões Utilizadas

* Node (16.15.1) - https://nodejs.org/en/download/
* MariaDB e Heide SQL (10.8.3) - https://mariadb.org/download/?t=mariadb&p=mariadb&r=10.8.3&os=windows&cpu=x86_64&pkg=msi&m=fder
* Sequelize
* Styled-Components.
* Axios.
* ReactJS 

## 📁 Acesso ao projeto

Para ter o projeto em sua máquina é necessário apenas que seja feito o clone do mesmo com o comando '**git clone https://github.com/Sorriso337/todo-list.git**'.

## 🛠️ Abrir e rodar o projeto

Para testar e poder alterar o código o processo é simples:

Fazer git clone desse projeto no seu repositório local

No aplicativo *HeidiSQL* criar uma conexão com o 

* ***HOST***: 127.0.0.1

* ***Usuário***: root

* ***Senha***: 123456

E em seguida criar uma database '**todo**', assim como está apontado no arquivo database.js no caminho **./back-end-desafio/config/database.js**

Começando pelo back-end do projeto:

1. Digite no terminal ***cd back-end-desafio***
2. Digite o comando ***npm install***
3. Digite o comando ***npm start*** 
4. Como padrão o projeto já cria o administrador com acesso:"admin@admin.com" e senha:"**123456**" 
5. Para confirmar o funcionamento acesse ***localhost:3030*** no seu navegador e o retorno deve ser "Cannot GET /"

Agora rodando o front-end: 

1. Volte a raiz do projeto
2. Digite no terminal ***cd front-end-desafio***
3. Digite o comando ***npm install***
4. Digite o comando ***npm start*** 
5. Para confirmar o funcionamento acesse ***localhost:3000*** no seu navegador e o retorno será a tela de login da aplicação

<br/>
<h2 align="center">Obrigado por ler até aqui e bons testes! 😊</h2>
