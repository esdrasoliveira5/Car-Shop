# car-shop-backend

## Sumário

- [Descrição](#Descrição)
- [Pré-requisitos](#Pre-requisitos)
  - [Instalação](#Instalação)
  - [Instruções para iniciar o projeto](#Intruções-para-iniciar-o-projeto)
- [Documentação](#Documentação)
  - [Cadastrar um novo carro](#Cadastrar-um-novo-carro)
  - [Lista todos os carros](#Lista-todos-os-carros)
  - [Listar um único carro através do seu id](#Listar-um-único-carro-através-do-seu-id) 
  - [Atualizar o registro de um carro através do seu id](#Atualizar-o-registro-de-um-carro-através-do-seu-id)
  - [Excluir os registros de um carro](#Excluir-os-registros-de-um-carro)
  - [Cadastrar uma nova moto](#Cadastrar-uma-nova-moto)
  - [Lista todos as motos](#Lista-todos-as-motos)
  - [Listar uma única moto através do seu id](#Listar-uma-única-moto-através-do-seu-id)
  - [Atualizar o registro de uma moto através do seu id](#Atualizar-o-registro-de-uma-moto-através-do-seu-id)
  - [Excluir os registros de uma moto](#Excluir-os-registros-de-uma-moto)



<br>

## Descrição

**Objetivo**: Neste projeto foi desenvolvido uma CRUD api para gerenciar uma concessionária de veículos utilizando o banco de dados MongoDB aplicando conceitos de POO.

- Arquitetura REST;
- Banco de Dados MongoDB;
- TypeScript;
- Testes Automatizados com Mocha, Chai e Sinnon;
- Docker

## Pré-requisitos

- `npm version 6.14.13`
- `node version 14.17.0`
- `docker version 20.10.13`
- `docker-compose version 1.29.2`

## Instalação

- Clone o repositório
  ```sh
    git clone git@github.com:esdrasoliveira5/Car-Shop.git
- Vá para a pasta da aplicação
  ```sh
    cd Car-Shop

## Instruções para iniciar o projeto

<br>

- Comando para iniciar

  ```sh
  sudo docker-compose up

<br/>

## Documentação

<br/>

### **Cadastrar um novo carro** 
##### `POST` /cars

  <br/>

  Esse endpoint retorna status ``201`` e o carro cadastrado.

  - Exemplo `request body` 
    ``` json
      {
        "model": "Ferrari Maranello",
        "year": 1963,
        "color": "blue",
        "buyValue": 3500000,
        "seatsQty": 2,
        "doorsQty": 2
      }
    ```

  - Exemplo `response body`
    ```json
        {
          "model": "Ferrari Maranello",
          "year": 1963,
          "color": "blue",
          "buyValue": 3500000,
          "seatsQty": 2,
          "doorsQty": 2,
          "_id": "62583ded1dabf1c8f26756dd"
        }
    ```
  <br/>

### **Lista todos os carros**
##### `GET` /cars
<br/>

  Retorna status ``200`` e todos os carros cadastrados.

  - Exemplo `response body`
    ```json
        [
            {
                "_id": "62583ded1dabf1c8f26756dd",
                "model": "Ferrari Maranello",
                "year": 1963,
                "color": "blue",
                "buyValue": 3500000,
                "seatsQty": 2,
                "doorsQty": 2
            },
            ...
        ]
    ```
<br/>

### **Listar um único carro através do seu id**
##### `GET` /cars/id
  <br/>

  Retorna status ``200`` e todos os carro cadastrado com o id especificado.

  - Exemplo `response body` 
    ``` json
        {
            "_id": "62583ded1dabf1c8f26756dd",
            "model": "Ferrari Maranello",
            "year": 1963,
            "color": "blue",
            "buyValue": 3500000,
            "seatsQty": 2,
            "doorsQty": 2
        }
    ```

  <br/>

### **Atualizar o registro de um carro através do seu id**
##### `PUT` /cars/id
  <br/>

  Retorna status ``200`` e o carro atualizado.

  - Exemplo `request body` 
    ``` json
      {
        "model": "Ferrari Maranello",
        "year": 1963,
        "color": "blue",
        "buyValue": 3500000,
        "seatsQty": 2,
        "doorsQty": 2
      }
    ```


  - Exemplo `response body` 
    ``` json
        {
            "_id": "62583ded1dabf1c8f26756dd",
            "model": "Ferrari Maranello",
            "year": 1963,
            "color": "blue",
            "buyValue": 3500000,
            "seatsQty": 2,
            "doorsQty": 2
        }
    ```

### **Excluir os registros de um carro**
##### `DELETE` /cars/id
  <br/>

  Retorna status ``204`` sem body.

  - Exemplo `response body` 
    ``` json
    []
    ```

  <br/>


### **Cadastrar uma nova moto** 
##### `POST` /motorcycles

  <br/>

  Esse endpoint retorna status ``201`` e a moto cadastrada.

  *Obs: Apenas as  tres categorias podem ser cadastradas Street, Custom ou Trail.* 

  - Exemplo `request body` 
    ``` json
      {
        "model": "Honda CG Titan 125",
        "year": 1963,
        "color": "black",
        "buyValue": 3500,
        "category": "Street",
        "engineCapacity": 12
      }
    ```

  - Exemplo `response body`
    ```json
        {
          "model": "Honda CG Titan 125",
          "year": 1963,
          "color": "black",
          "buyValue": 3500,
          "category": "Street",
          "engineCapacity": 125,
          "_id": "6258404d1dabf1c8f26756e0"
        }
    ```
  <br/>

### **Lista todos as motos**
##### `GET` /motorcycles
<br/>

  Retorna status ``200`` e todos as motos cadastradas.

  - Exemplo `response body`
    ```json
        [
            {
              "model": "Honda CG Titan 125",
              "year": 1963,
              "color": "black",
              "buyValue": 3500,
              "category": "Street",
              "engineCapacity": 125,
              "_id": "6258404d1dabf1c8f26756e0"
            },
            ...
        ]
    ```
<br/>

### **Listar uma única moto através do seu id**
##### `GET` /motorcycles/id
  <br/>

  Retorna status ``200`` e todas as motos cadastradas com o id especificado.

  - Exemplo `response body` 
    ``` json
        {
          "model": "Honda CG Titan 125",
          "year": 1963,
          "color": "black",
          "buyValue": 3500,
          "category": "Street",
          "engineCapacity": 125,
          "_id": "6258404d1dabf1c8f26756e0"
        }
    ```

  <br/>

### **Atualizar o registro de uma moto através do seu id**
##### `PUT` /motorcycles/id
  <br/>

  Retorna status ``200`` e a moto atualizada.

  - Exemplo `request body` 
    ``` json
      {
        "model": "Honda CG Titan 125",
        "year": 1963,
        "color": "black",
        "buyValue": 3500,
        "category": "Street",
        "engineCapacity": 125
      }
    ```


  - Exemplo `response body` 
    ``` json
        {
          "model": "Honda CG Titan 125",
          "year": 1963,
          "color": "black",
          "buyValue": 3500,
          "category": "Street",
          "engineCapacity": 125,
          "_id": "6258404d1dabf1c8f26756e0"
        }
    ```

### **Excluir os registros de uma moto**
##### `DELETE` /motorcycles/id
  <br/>

  Retorna status ``204`` sem body.

  - Exemplo `response body` 
    ``` json
    []
    ```

  <br/>
