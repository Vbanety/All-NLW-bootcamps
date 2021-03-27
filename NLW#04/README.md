<img src="https://i.ibb.co/n7hVjzB/trilha-node.png" align="center">

# <h1 align="center">Passos de configuração e preparação do ambiente</h1>

* Instalando dependencias

### OBS: Dentro da pasta API
- yarn add express 
- yarn add @types express -D
- yarn add typescript -D (instalando o typescript)
- yarn tsc --init (iniciando o typescript na aplicação)
- yarn add ts-node-dev -D 

- Alterar tsconfig:
 inserir: "dev": "ts-node-dev src/server.ts" > --transpile-only --ignore-watch node_modules (após ts-node-dev)

 ### Dia 2
 - yarn add typeorm reflect-metadata
 - yarn add sqlite3 / > opcional(--save)
 - adicionando typeorm e utilizando a cli

 ```json
 "scripts": {
    "dev": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts",
    "typeorm": "ts-node-dev node_modules/typeorm/cli.js"
  }
  ```
  - Criando uma migration: comando > [yarn typeorm migration:create -n CreateUsers]
  
  - Alterando o arquivo ormconfig.json logo abaixo.
  ```json
  {
    "type": "sqlite",
    "database": "./src/database/database.sqlite" ,
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }
}
  ```
- Após definir os campos da sua tebela na migrations criada recentemente, executar o comando:
[ yarn typeorm migration:run ]

- Rodando a migrations dentro da pasta migration, é necessario inserir a seguinte linha no arquivo 
ormconfig.json

linha: > "migrations": ["./src/database/migrations/**.ts"]

#### OBS > Comando para desfazer a ultima migration criada no banco
- yarn typeorm migration:revert

- HABILITANDO FUNÇOES NO TSCONFIG.JSON

"experimentalDecorators": true, MUDAR PARA TRUE
"emitDecoratorMetadata": true, MUDAR PARA TRUE
"strictPropertyInitialization": false, DESCOMENTAR

### Instalar biblioteca
- yarn add uuid
- yarn add @types/uuid -D

$ > DICA: SELECT * FROM USERS WHERE EMAIL = "EMAIL", substitui o método ".findOne", e vice-versa. 

### Install libs

- yarn typeorm migration:create -n CreateSurveys

### DIA 3
#### Testes Automatizados

1 - Testes unitários

2 - Testes de integração

-> routes -> controller -> repository
<- repository <- controller <- response

3 - Ponta a Ponta (E2E) - Mais utilizando em aplicação frontend.

** Install libs para testes automatizados

- yarn add jest @types/jest -D

- yarn jest --init (iniciando a base de teste.)

> opçoes: Yes, Yes, node, no, V8, yes (jest.config.ts ok)

> Descomentar : // testEnvironment: "node" ( no jest.config.ts)

> Descomentar: ( no jest.config.ts) e alterar para
```json
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
```
alterar: 
  testMatch: ["**/__tests__/*.test.ts"],

** Install libs

- yarn add ts-jest -D

- alterar linha 96 do jest.config de undefined para: > preset: "ts-jest",

** Install libs

- yarn add supertest @types/supertest -D

### DIA 4

** Instal libs

- yarn typeorm migration:create -n CreateSurveysUsers

- yarn add nodemailer

- yarn add @types/nodemailer -D

- yarn add handlebars

### DIA 5

** Install libs

- yarn add yup

DICAAA > comando pkill node -> é para cancelar todas as tasks que está rodando no servidor.

Depois de efetuar os testes : remover >    return response.status(400).json({error: "Vaidation Failed!"}) do 
package.json

- yarn add express-async-errors
