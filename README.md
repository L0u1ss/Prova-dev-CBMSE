# Projeto Agenda
###### Sistema de agenda web Full Stack.
Construido utilizando React.js em SPA(Single Page Application), e API(Appliction Programming Interface) Restful em PHP.

---
# **Rodar o React**
Se possuir npm instalado:
Para rodar o projeto, use esse comando dentro da pasta my-app:
```
npm start
```
Se não possuir npm instalado:
FAça download do node aqui:
`https://nodejs.org/en/download/`
Depois instale o npm na pasta do projeto:
```
npm install
```
e depois rode  o projeto, usando esse comando dentro da pasta my-app:
```
npm start
```
---
# **Instalar API (PHP)**
**Versions**
- PHP: 7.4.10
- MariaDB: 10.4.14

**Guia**
- Colocar a pasta API na raiz do site, pois front-end faz uma requesição para `http://localhost/api/`
- Executar código sql na dsponível na Categoria **Banco de Dados**
- Acessar página `http://localhost:3000`
---
# **Banco de Dados**
``` sql
create database agenda;

CREATE TABLE agenda.pessoa (
    id int NOT NULL AUTO_INCREMENT, 
    nome varchar(50) NOT NULL,
    sobrenome varchar(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE agenda.tipo_contato (
    id int NOT NULL,
    nome varchar(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE agenda.contato_pessoa (
    id int NOT NULL AUTO_INCREMENT,
    contato varchar(50) NOT NULL,
    pessoa_id int NOT NULL,
    tipo_contato_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (pessoa_id) REFERENCES pessoa(id),
    FOREIGN KEY (tipo_contato_id) REFERENCES tipo_contato(id)
);

INSERT INTO agenda.tipo_contato (id, nome)
VALUES
       (1, 'Telefone'),
       (2, 'Celular'),
       (3, 'E-mail'),
       (4, 'Outros')
```

---
# **API**
- **Credenciais do Banco de Dados**
    Editar as credenciais no diretório abaixo:
    ```
    /api/config/db.php/
    ```
    ## **ENDPOINTS**
    ##### Adicionar Pessoa
    `POST`
    ```
   /api/pessoas/adicionar.php/
    ```    
    ENVIO
    ``` json
    {
        nome: "TestPost",
        sobrenome: "Api"
    }
    ```
    RETORNO
    ```
    {
        code: "sucess"
    }
    ```
    
     ##### Editar Pessoa
    `PATCH`
    ```
    /api/pessoas/editar.php/
    ```    
    ENVIO
    ``` json
    {
        userid: 0,
        nome: "TestPatch",
        sobrenome: "Api"
    }
    ```
    RETORNO
    ```
    {
        code: "sucess"
    }
    ```
    
    ##### Listar Pessoa
    `GET`
    ```
    /api/pessoas/listar.php/
    ```    
    RETORNO
    ```
    [
        {
            id: 0,
            nome: "TestGet",
            sobrenome; "api"
        },
        {
            id: 1,
            nome: "TestGet 2",
            sobrenome: "api 2"
        }
    ]
    ```
    
    ##### Remover Pessoa
    `DELETE`
    ```
    /api/pessoas/remover.php/?userid={userid}
    ```    
    ENVIO
    | Parâmetros |        Descrição        |
    |------------|-------------------------|
    | userid     | O id da pesssoa (ex: 8) |
    
    RETORNO
    ```
    {
        code: "sucess"
    }
    ```
    
     ##### Adicionar Contato
    `POST`
    ```
    /api/pessoas/contatos/adicionar.php/
    ```    
    ENVIO
    ``` json
    {
        contato: "999999999",
        userid: 0,
        tipoContato: 2
    }
    ```
    RETORNO
    ```
    {
        code: "sucess"
    }
    ```
    
    ##### Editar Contato
    `PATCH`
    ```
    /api/pessoas/contatos/editar.php/
    ```    
    ENVIO
    ``` json
    {
        contato: "999999999",
        contatoid: 0,
        tipoContato: 2
    }
    ```
    RETORNO
    ```
    {
        code: "sucess"
    }
    ```
    
    ##### Listar Contatos
    `GET`
    ```
    /api/pessoas/contatos/listar.php/?userid={userid}
    ``` 
   ENVIO
    | Parâmetros |        Descrição        |
    |------------|-------------------------|
    | userid     | O id da pesssoa (ex: 8) |
    
    RETORNO
    ```
    [
        {
            contatoid: 0,
            tipoContato: 2,
            contato: "999999999"
        },
        {
            contatoid: 0,
            tipoContato: 2,
            contato: "999999999"
        }
    ]
    ```

    ##### Remover Contato
    `DELETE`
    ```
    /api/pessoas/contatos/remover.php/?userid={userid}&contatoid={contatoid}
    ```    
    ENVIO
    | Parâmetros |        Descrição        |
    |------------|-------------------------|
    | userid     | O id da pesssoa (ex: 8) |
    | contatoid  | O id do contato (ex: 2) |
    
    RETORNO
    ```
    {
        code: "sucess"
    }
    ```
    
    
    
    
    
    
  
    
    
