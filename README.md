# Node API + MYSQL
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/neliocursos/exemplo-readme/blob/main/LICENSE) 

# Sobre o projeto

Basicamente oferencendo a mesma proposta de um projeto já existente aqui (), é uma aplicação que faz a comunicação entre o Front End de uma aplicação em React Native e um banco de dados MySQL. A diferença é que neste projeto não foi usada uma ORM como o Sequelize. Neste projeto foi usada uma lib (npm mysql) que faz a comunicação direta com o banco através da sintaxe padrão do MySQL.

# Tecnologias utilizadas
- NodeJS
- Nodemon
- ExpressJS
- Mysql (npm)
- Cors
- Body Parser

# Como executar o projeto
### **Dependências necessárias:** Express, Nodemon, Body Parser, Cors e mysql.</br> **As libs acima podem ser instaladas utilizando:**

```bash
npm install nome_do_pacote
```
Para prosseguirmos, primeiramente você deverá clonar o repositório em sua máquina:

```bash
# clonar repositório
git clone https://github.com/pabloalvesdev/ApiNode-MySQL.git

# entrar na pasta do projeto
cd ApiNode-MySQL

## abra com o seu editor de textos, no meu caso é o vscode...
code ./index.js
```
Ao abrir o arquivo "index.js" com o seu editor de textos, procure e altere as seguintes linhas:

```js
const banco = mysql.createConnection({
    host: 'url_do_seu_server', 
    user: 'seu_usuario', 
    password: 'sua_senha', 
    database: 'nome_do_banco'
})
```

Feitas estas configurações iniciais basta rodar a aplicação:

```bash
# entrar na pasta do projeto
cd ApiNode-MySQL

# executar o projeto
npx nodemon
```

# Autor

Pablo Alves

https://www.linkedin.com/in/pablo-alves-a40056203/
