<h1 align="center">
  <p>Busca CEP</p>
  
  <img src="https://img.shields.io/static/v1?label=Status&message=Conclu%C3%ADdo&color=brightgreen&style=flat&labelColor=3E3E3E">
</h1>

Aplicação para mostrar detalhes sobre um determinado CEP.

## Tópicos :scroll:

:small_blue_diamond: [Detalhes do projeto](#detalhes-do-projeto-memo)

:small_blue_diamond: [Funcionalidades](#funcionalidades-stars)

:small_blue_diamond: [Layout](#layout-milky_way)

:small_blue_diamond: [Backend](#backend-card_file_box)

:small_blue_diamond: [JSON](#json-floppy_disk)

:small_blue_diamond: [Veja você mesmo](#veja-você-mesmo-arrow_forward)

:small_blue_diamond: [Tecnologias](#tecnologias-books)

:small_blue_diamond: [Desenvolvedores/Contribuintes](#desenvolvedorescontribuintes-octocat)

## Detalhes do projeto :memo:

<p align="justify">
  Esta aplicação foi desenvolvida para mostrar os dados de um determinado CEP de forma amigável ao usuário final com a utilização da API <a href="https://viacep.com.br">ViaCEP</a>.
  Foi utilizado um backend para armazenar os dados das consultas a esta API em um banco de dados para não precisar utilizar a API novamente para um CEP já pesquisado.
  Além disso, também foi utilizado um sistema de cache no backend para otimizar as consultas constantes de uma mesmo CEP.
</p>

## Funcionalidades :stars:

:heavy_check_mark: Consultar CEP

:heavy_check_mark: Consultar API ViaCEP

:heavy_check_mark: Armazenar CEPs no banco de dados

:heavy_check_mark: Armazenar CEPs na cache do backend

## Layout :milky_way:

<h3 align="center">
  :computer: Desktop :computer:
</h3>
<p align="center">
  <Img src="https://github.com/rafarod21/ConsultaCEP/blob/master/gitAssets/pageHome.jpeg">
</p>

## Backend :card_file_box:

Para o backend foi utilizado Node.js com Express e o banco de dados utilizado foi o SQLite.

## JSON :floppy_disk:

No banco de dados existe apenas uma tabela:

### CEP:

|cep|street|complement|neighborhood|city|uf|ibge|gia|ddd|siafi|
| -------- |-------- |-------- |-------- |-------- |-------- |-------- |-------- |-------- |-------- |
|87013210|Avenida Tamandaré||Zona 01|Maringá|PR|4115200||44|7691|
|02221000|Avenida Jardim Japão|até 1101/1102|Jardim Brasil (Zona Norte)|São Paulo|SP|3550308|1004|11|7107|

## Veja você mesmo :arrow_forward:

#### :small_blue_diamond: Na própria máquina - Passo-a-passo
    
##### Passo 1: Clonando o repositório
```bash
$ git clone https://github.com/rafarod21/ConsultaCEP.git
```
    
##### Passo 2: Acessando a pasta do backend do projeto
```bash
$ cd .\backend\
```
    
##### Passo 3: Instalando as dependências do backend com npm ou Yarn
```bash
# Utilizando npm
$ npm install

# Utilizando Yarn
$ yarn
```
  
##### Passo 4: Executando os testes do backend do projeto com npm ou Yarn
```bash
# Utilizando npm
$ npm run test

# Utilizando Yarn
$ yarn test
```
    
##### Passo 5: Executando o backend do projeto com npm ou Yarn
```bash
# Utilizando npm
$ npm run dev

# Utilizando Yarn
$ yarn dev
```
    
##### Passo 6: EM OUTRO TERMINAL, acesse a pasta do frontend do projeto
```bash
$ cd .\frontend\
```
    
##### Passo 7: Instalando as dependências do frontend com npm ou Yarn
```bash
# Utilizando npm
$ npm install

# Utilizando Yarn
$ yarn
```

##### Passo 8: Executando o frontend do projeto com npm ou Yarn
```bash
# Utilizando npm
$ npm run start

# Utilizando Yarn
$ yarn start
  
# O projeto deverá ser iniciado na porta 3000
```

##### Passo 9: Vizualizando o projeto
Acesse: http://localhost:3000

## Tecnologias :books:
    
- [Typescript](https://www.typescriptlang.org)
- [ReactJS](https://pt-br.reactjs.org)
- [NodeJS](https://nodejs.org/en)
- [Material-UI](https://mui.com)
  
  
    
<!--
<p align="center">
  <a href="https://www.typescriptlang.org">Typescript</a> |
  <a href="https://pt-br.reactjs.org">ReactJS</a> |
  <a href="https://nextjs.org">NextJS</a> |
  <a href="https://nodejs.org/en">NodeJS</a> |
  <a href="https://reactnative.dev">React Native</a>
<p>
 -->

## Desenvolvedores/Contribuintes :octocat:

<img src="https://avatars0.githubusercontent.com/u/39251153?s=460&u=b18964e9a5e2c3c1ef9bc74ae8c35b11095c841b&v=4" width=115><br>
<a aria-label="LinkedIn - Rafael Rodrigues" href="https://www.linkedin.com/in/rafael-montrezol-942a60170">
    <img src="https://img.shields.io/static/v1?logo=linkedin&label=LinkedIn&message=Rafael%20Rodrigues&color=00A0DC&style=flat&labelColor=0077B5"> 
</a>
<a aria-label="GitHub - Rafael Rodrigues" href="https://github.com/rafarod21">
    <img alt="GitHub - Rafael Rodrigues" src="https://img.shields.io/static/v1?logo=github&label=GitHub&message=Rafael%20Rodrigues&color=2FBB4F&style=flat&labelColor=211F1F"></img>
</a>
