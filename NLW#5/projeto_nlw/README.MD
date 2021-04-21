![Let's go NLW05](./assets/apresentation.png)

## STEP BY STEP of CLASS 

** First of all, you need to install some libraries.

1- Start setting the command [yarn init -y]

2- Installing express > [ yarn add express AND yarn add @types/express -D]

3- Installing typescript > [ yarn add typescript -D ] before that create the tsconfig type the 
command> [ yarn tsc --init ] after that alter the line 28 changing the value of STRICT from TRUE to FALSE.

4- Installing ts-node [ yarn add ts-node-dev -D ], after that alter the file package.json inserting:
```.json
"script": {
    "dev": "ts-node-dev src/server.ts"
  },
  ```

5- Now you'll gonna do some request and response just for testing your server.

** OBS> The first code of the first class is MISSAOESPACIAL
