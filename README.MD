# Event-attractionAPI

## Descrição

A **Event-attractionAPI** é uma API que permite o cadastro de eventos e suas atrações. Os usuários podem se inscrever nas atrações, e a API utiliza Tesseract.js para leitura de imagens dos documentos de identidade (RG) dos usuários para validar a idade e permitir ou não a participação em determinadas atrações.

## Tecnologias Utilizadas

- **JavaScript**: Linguagem de programação principal.
- **Node.js**: Runtime para executar JavaScript no backend.

### Bibliotecas

- [**@prisma/client**](https://www.prisma.io/docs/concepts/components/prisma-client): Cliente do Prisma para interagir com o banco de dados.
- [**bcryptjs**](https://github.com/dcodeIO/bcrypt.js): Biblioteca para hashing de senhas.
- [**cors**](https://github.com/expressjs/cors): Middleware para habilitar CORS.
- [**dotenv**](https://github.com/motdotla/dotenv): Carrega variáveis de ambiente de um arquivo `.env`.
- [**express**](https://expressjs.com/): Framework web para Node.js.
- [**express-async-errors**](https://github.com/davidbanham/express-async-errors): Captura erros em funções assíncronas no Express.
- [**jsonwebtoken**](https://github.com/auth0/node-jsonwebtoken): Implementação de JSON Web Tokens.
- [**multer**](https://github.com/expressjs/multer): Middleware para manipulação de arquivos multipart/form-data.
- [**prisma**](https://www.prisma.io/): ORM (Object-Relational Mapping) para Node.js.
- [**tesseract.js**](https://github.com/naptha/tesseract.js): Biblioteca de OCR para reconhecimento de texto em imagens.
- [**ts-node**](https://github.com/TypeStrong/ts-node): Execução de arquivos TypeScript diretamente no Node.js.
- [**zod**](https://github.com/colinhacks/zod): Biblioteca para validação de esquemas.

## Estrutura do Banco de Dados

### User

- `id`
- `name`
- `email`
- `CPF`
- `password`
- `roleId`

### Authorization

- `id_role`
- `name_role`
- `discription_role`

### Event

- `id_event`
- `name_event`
- `discription`
- `address`
- `city`
- `date_event`

### Attractions

- `id`
- `name`
- `hours`
- `date`
- `discription`
- `limit`
- `active`
- `indicated_classification`
- `event_id`

### Inscription

- `id`
- `name`
- `age`
- `attractionId`

##

**Entrada de Dados e Saida**

**Users**
**Body:**

```json
{
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "CPF": "123.456.789-00",
  "password": "senha123",
  "roleId": 1
}
```

**Response**

```json
{
  "success": true
}
```

**Authorization**
**Body:**

```json
{
  "name_role": "Admin",
  "discription_role": "Administrator role with full access"
}
```

**Response**

```json
{
  "success": true
}
```

**Event**
**Body:**

```json
{
  "name_event": "Tech Conference 2024",
  "discription": "A conference about the latest in tech.",
  "address": "123 Tech Street",
  "city": "Tech City",
  "date_event": "2024-09-15"
}
```

**Response**

```json
{
  "success": true
}
```

**Attractions**
**Body:**

```json
{
  "name_event": "Tech Conference 2024",
  "discription": "A conference about the latest in tech.",
  "address": "123 Tech Street",
  "city": "Tech City",
  "date_event": "2024-09-15"
}
```

**Response**

```json
{
  "success": true
}
```

**Inscription**
**Body:**

```json
{
  "name": "John Doe",
  "age": 25,
  "attractionId": 1
}
```

**Response**

```json
{
  "success": true
}
```

##

**Swager**
A documentação completa dos endpoints está disponível via Swagger. Para acessar a documentação, inicie o servidor e navegue para /api-docs.

##

**Ponto Alvo do Projeto**
O ponto alvo deste projeto é a utilização do Tesseract.js para leitura de imagens, com o objetivo de validar a idade dos usuários no momento da inscrição. A API lê o documento de identidade (RG) do usuário para confirmar a idade e verificar se ele pode participar da atração desejada.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/event-attractionAPI.git
   cd event-attractionAPI
   ```

**Instale as Depedencias**:


```bash
npm install
# ou
yarn install
```

#

**DATABASE**
Execute as migrações do banco de dados e gere o cliente Prisma:
```bash
npx prisma migrate deploy
# e
npx prisma generate
```

## Contribuição 🤝

Sinta-se à vontade para contribuir para o desenvolvimento deste projeto. Qualquer contribuição é bem-vinda!

Fork o projeto
- Crie uma nova branch **(git checkout -b feature/sua-feature)**
- Faça commit das suas mudanças **(git commit -m 'Adicione uma nova feature')**
- Envie as mudanças para o repositório remoto **(git push origin feature/sua-feature)**
- Abra um pull request!