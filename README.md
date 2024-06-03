<h1 align="center">
  <img alt="Logo InsightLab" src="https://www.insightlab.ufc.br/wp-content/uploads/2020/02/LogoInsightColor.png" width="250px" />
</h1>


<p align="center">
  <a href="#page_with_curl-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer-tecnologias">Tecnologias</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#sos-desafios">Desafios</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#fire-próximos-passos">Próximos passos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#sunrise-interface">Interface</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#golf-api">API</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#books-requisitos">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-iniciando">Iniciando</a>
</p>

<div align="center">
    <img alt="Login" src="https://i.imgur.com/1iCqo2I.png" width="400" />
    <img alt="Não autorizado" src="https://i.imgur.com/0PcYude.png" width="400" />
</div>

<div align="center">
    <img alt="Home" src="https://i.imgur.com/dI4hcZL.png" width="400" />
    <img alt="Adicionar" src="https://i.imgur.com/AdoFBZB.png" width="400" />
</div>

<div align="center">
    <img alt="Home preenchida" src="https://i.imgur.com/ZHaqEwN.png" width="400" />
    <img alt="Editar" src="https://i.imgur.com/QTCY4gP.png" width="400" />
</div>


## :page_with_curl: Sobre

Este repositório é referente ao [**desafio fullstack do InsightLab**](https://www.insightlab.ufc.br/wp-content/uploads/2024/05/Projeto-Cultura-Dev-Full-Stack.pdf). 

O presente desafio consiste na criação de um módulo de cadastro de fornecedores para o sistema de gestão de processos de uma organização (back-end e front-end). O back-end do sistema deverá conter um banco de dados previamente populado e uma API de acesso ao banco com as seguintes operações:
- Cadastrar fornecedor;
- Listar fornecedores cadastrados;
- Editar, visualizar e excluir fornecedores cadastrados.

O front-end do sistema deverá consumir essa API.

As restrições para esse desafio são:
- Construção do back-end em Java Springboot
- Criação do front-end em React com NextJS

## :hammer: Tecnologias

- Java 17
- Springboot
- PostgreSQL
- NextJS
- ReacJS
- Typescript
- Nginx
- Docker

Além das tecnologias obrigatórias, acabei me empolgando e usando Docker e Nginx no projeto. 

## :sos: Desafios

Este projeto como um todo foi desafiador. Eu tenho um bom conhecimento de POO e gosto de Java, mas não programo tanto na linguagem. Mesmo assim, consegui me virar com Spring Boot, que eu havia usado há muito tempo.

Desenvolver a API foi tranquilo, mas tive dificuldades ao implementá-la. Não por falta de conhecimento, mas por falta de um "norte". A priori não me atentei a criar o protótipo de telas, e por ser um pouco perfeciocinata, acabei dedicando 1 (um) dia de desenvolvimento para prototipar as telas.

<div align="center">
  <img alt="Primeira versão da interface" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnJwbHAzODYxYWt1N3lxc2h3bW04Ym9nMDlidWlzN3FicWdtY3p5MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HOaEvenv0oCGppGsaZ/giphy.gif" width="500" />
  <p>Primeira versão da interface</p>
</div>

Já no front, o desafio se dá pelo o uso do NextJS. Nas minha aplicações opto por utilizar o [**framework Vite**](https://vitejs.dev/guide/). A minha preferência se da pois ele é mais mais leve e por ser o mais indicado em ocasiões como essa, onde o front e o back são tratados de forma independente. Confesso que nunca tinha usado o framework, mas ele me supreendeu postivamente.

Aproveitei a oportuinidade para ver como era a criação de uma imagem docker de uma aplicação em java e também do nextjs.

Servir um container NextJS no Nginx é diferente do que eu estava ocustumado.

Resumindo, o projeto foi desafiador porém satisfatório, pude por em pratica alguns conhecimentos e aperfeiçoar outros.


## :fire: Próximo passos

### Autenticação

Uma feature que eu queria implementar, mas que não deu tempo, foi a autenticação por parte da API. 
Onde seria gerado um JWT (JSON Web Token) ao realizar o login com sucesso, o mesmo seria armazenado no `local sotarage`. Esse Token serviria para mandar no cabecalho das requisições a fim de autorizar as requisições.

Mas de qualquer forma, cheguei a implementar o mecanismo de inserir os tokens no navegador com o Local Storage. Ao acessar o `/home` sem estar logado, vai aparecer uma mensagem "usuário não autenticado". (2ª Imagem)

### Reponsividade

Até tem um pouco de responsividade aplicada ao projeto, mas faltou refiná-la. Devido ao tempo para desenvolvimento, não pude dar tanta atenção a ajustar detalhes.

## :sunrise: Interface

O design das telas foi desenvolvido por mim e está disponível em [**telas do desafio Insight**](https://www.figma.com/design/wfrffJDIqCIVsuZDSxG36S/Insight-Challenge?node-id=0-1&t=scFgBStNewFXZRxR-1).

## Recursos adicionais

Máscara no input de contato
<p align="center">
  <img alt="Editar" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGU0aHExMGQ3MWdxMWZ1aTF6c3FtMzMzaHU3aXloc3drZ3dmbHExcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/p0BkmwizZWOZitdDyJ/giphy.gif" width="400" />
</p>

## :golf: API

A API oferece os seguintes endpoints para gerenciar fornecedores e autenticação:

### Autenticação

#### Login

`POST - /users/login`

```bash
{
    "email": "admin@insightlab.com",
    "senha": "ilab#admin"
}
```

### Fornecedores

#### Criar Fornecedor

`POST - /provider`

```bash
{
    "name": "Repositor A",
    "contact": "+55 (85) 9.9999-9999",
    "type": "Produto",
    "additionalInfo": "Papelaria"
}
```

#### Ler Fornecedor

`GET - /provider?id={ID_FORNECEDOR}`

#### Ler Todos os Fornecedores

`GET - /provider/all`

#### Atualizar Fornecedor

`PUT - /provider?id={ID_FORNECEDOR}`

Exemplo de atualização do número de telefone:

```bash
{
    "name": "Repositor A",
    "contact": "+55 (85) 9.9999-8888",
    "type": "Produto",
    "additionalInfo": "Papelaria"
}
```

#### Remover Fornecedor

`DELETE - /provider?id={ID_FORNECEDOR}`


## :books: Requisitos

As tecnologias a seguir são necessárias para conseguir rodar o projeto em sua máquina.

- Ter [**Git**](https://git-scm.com/) para clonar o projeto.
- Ter [**Docker**](https://www.docker.com/get-started/) para executar o projeto.

## :rocket: Iniciando
``` bash
  # Clonar o projeto:
  $ git clone git@github.com:davifariasp/insight-fullstack-challenge.git

  # Entrar no diretório:
  $ cd insight-fullstack-challenge

  # Entrar da spa:
  $ cd spa

  #Adicionar variável de ambiente
  $ nano .env

  #Vai colar:

  NEXT_PUBLIC_URL_API = http://localhost:api
  
  #Vai salvar
  [CTRL + O] de depois [ENTER]

  #Depois fechar editor
  [CTRL + X]

  # Compor o projeto:
  $ docker compose up -d

  # Acesso o front:
  $ http://localhost

  # Acesso ao back-end:
  $ http://localhost/api
```