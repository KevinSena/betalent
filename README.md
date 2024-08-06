# Teste Betalent

Este projeto é um teste técnico para a Betalent

## Requisitos

Liste os pré-requisitos necessários para rodar o projeto

- Docker
- Docker Compose
- Node V22 ou superior (não necessário se usar docker compose)

## Instalação

Passos para instalar o projeto em sua máquina local.

### Clone este repositório
```bash
git clone https://github.com/KevinSena/betalent.git
```

### Inicie os containers
```bash
docker-compose up -d
```

### Caso não use os containers, entre no diretório do projeto
```bash
cd betalent/backend
```

### Instale as dependências
```bash
npm install
```

### Rode o projeto localmente
```bash
npm run dev
```


## Detalhamento de rotas




### POST /signup

Faz cadastro de usuário

**Exemplo de Parâmetros JSON:**

```json
{
	"fullName": "Kevin de Souza Sena",
	"email": "myself@me.com",
	"password": "12345678"
}
```

### POST /login

Faz login de usuário

**Exemplo de Parâmetros JSON:**

```json
{
	"email": "myself@me.com",
	"password": "12345678"
}
```

### POST /client

Cria clientes

**Exemplo de Parâmetros JSON:**

```json
{
	"name": "Zac",
	"cpf": "12343678422",
	"address": {
		"street": "My Street",
		"number": 45,
		"city": "New York",
		"state": "ES",
		"zipcode": "12345678"
	},
	"phone": "12345678952"
}
```

### GET /client

Retorna lista de clientes

### POST /client/:id

Retorna cliente específico

**Exemplo de Parâmetros query:**

```bash
?month=08&year=2024
```

### PUT /client/:id

Edita cliente

**Exemplo de Parâmetros JSON:**

```json
{
	"name": "Zac",
	"cpf": "12343678422",
	"address": {
		"street": "My Street",
		"number": 45,
		"city": "New York",
		"state": "ES",
		"zipcode": "12345678"
	},
	"phone": "12345678952"
}
```

### DELETE /client/:id

Deleta cliente especificado

**Exemplo de Parâmetros JSON:**

### POST /product

Cria produto

**Exemplo de Parâmetros JSON:**

```json
{
	"name": "rex",
	"description": "whatever",
	"price": 5000,
	"manufacturingDate": "2024-08-05T18:53:11.000+00:00",
	"expirationDate": "2024-08-15T18:53:11.000+00:00"
}
```

### GET /product

Retorna todos os produtos

### GET /product/:id

Retorna cliente especificado

### PUT /product/:id

Edita qualquer atributo do produto

**Exemplo de Parâmetros JSON:**

```json
{
	"name": "Albon",
	"price": 32000
}
```

### DELETE /product/:id

Deleta produto especificado, "soft delete"

### POST /sale/:id

Cria venda

**Exemplo de Parâmetros JSON:**

```json
{
	"clientId": 1,
	"productId": 1,
	"quantity": 4
}
```
