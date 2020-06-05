<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️-->

<p align="center">
  <img src="https://raw.githubusercontent.com/DanielObara/NLW-1.0/ba807fa46c4114d0e052f5e8291624f24821278a/.github/logo.svg" alt="Logo" width="150" height="auto" />
</p>
<p align="center">
		<a href="https://img.shields.io/github/languages/count/StefanyVasc/NLW-1?style=for-the-badge"><img alt="Languagens" src="https://img.shields.io/github/languages/count/StefanyVasc/NLW-1?style=for-the-badge" height="20"/></a>
<a href="https://img.shields.io/github/repo-size/StefanyVasc/NLW-1?style=for-the-badge"><img alt="Repo Size" src="https://img.shields.io/github/repo-size/StefanyVasc/NLW-1?style=for-the-badge" height="20"/></a>
<a href="https://img.shields.io/npm/v/npm?style=for-the-badge"><img alt="Npm Version" src="https://img.shields.io/npm/v/npm?style=for-the-badge" height="20"/></a>
<a href="https://img.shields.io/github/last-commit/STefanyVasc/nlw-1?style=for-the-badge"><img alt="Commits" src="https://img.shields.io/github/last-commit/STefanyVasc/nlw-1?style=for-the-badge" height="20"/></a>
<a href="https://img.shields.io/badge/Made%20by-Stefany%20S%C3%A1-blueviolet?style=for-the-badge&logo=appveyor"><img alt="Made By" src="https://img.shields.io/badge/Made%20by-Stefany%20S%C3%A1-blueviolet?style=for-the-badge&logo=appveyor" height="20"/></a>
	</p>


<p align="center">
    <a href="https://insomnia.rest/run/?label=server-ecoleta&uri=https%3A%2F%2Fgithub.com%2FStefanyVasc%2FNLW-1%2Fblob%2Fmaster%2FInsomnia_2020-06-03.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

<p align="center">
  <b>Ecoleta</b></br>
  <sub>O Ecoleta é a ponte entre empresas que coletam resíduos sejam eles orgânicos ou inorgânicos com pessoas que estão procurando pontos para descartá-los.<sub>
</p>

<br />




[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#projeto)

## ➤ Projeto

O Ecoleta é a ponte perfeita entre estabelecimentos que são pontos de coletas e pessoas que querem descartar algum tipo de material, seja ele orgânico ou inorgânico. 
Para isso o Ecoleta conta com um sistema web onde é destinado aos donos de estabelecimentos, nele é possível fazer o cadastro dos pontos de coleta e os itens que serão coletados. Já para a população temos um aplicativo mobile que fornecerá os pontos especificos de coletas por localização e por aceitação de determinados tipos de descarte de itens. 




[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#tecnologias)

## ➤ Tecnologias

- [Node.js](https://nodejs.org/en/)
- [TypeScript]()
- [React](https://reactjs.org/)
- [React Native](https://facebook.github.io/react-native/)
- [SQLite](https://www.sqlite.org/index.html)
- [Expo](https://expo.io/)

Extras: 
  * Main Libs:
    * [Express](https://expressjs.com/pt-br/)
    * [Cors](https://www.npmjs.com/package/cors)
    * [KnexJS](http://knexjs.org/)
    * [Axios](https://github.com/axios/axios)
  
  * Softwares
    * [VSCode](https://code.visualstudio.com/)
    * [Insomnia REST Client](https://insomnia.rest/)




[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#layout)

## ➤ Layout

Um preview sobre o projeto. Caso queira acessar o layout inteiro basta [clicar aqui](https://www.figma.com/file/9TlOcj6l7D05fZhU12xWT3/Ecoleta-(Booster)?node-id=0%3A1)

<div align="center">
  <img src="web/src/assets/mobile-preview.png" alt="Preview Mobile"></img>
  <img src="web/src/assets/web-preview.png" alt="Preview Web"></img>
</div>

<br/>




[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#file-insomnia)

## ➤ File Insomnia

O arquivo .json com o arquivo usado no Insomnia está dentro da raiz do projeto. Basta fazer o download e importar no insomnia e usar. Lembre de alterar o que for necessário para que você consiga efetuar as requisições. Ou clique no botão para ser redirecionado. <br/>
<br/>
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=server-ecoleta&uri=https%3A%2F%2Fgithub.com%2FStefanyVasc%2FNLW-1%2Fblob%2Fmaster%2FInsomnia_2020-06-03.json)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#instalao)

## ➤ Instalação

O **Backend** foi construido em **NodeJS**, certifique-se de ter alguma versão do node instalada em sua máquina. Utilize o Insomnia para realizar os testes na API.

Iniciando o backend: 
```
cd server
npm install
npm run dev
```

Iniciando o **Frontend** em **ReactJS**: 

```
cd web
npm install
npm run start
```

Assim que o processo terminar, automaticamente será aberta no seu navegador a página localhost:3000 contendo o Projeto.

Iniciando com o **Mobile** em **React Native**

  1.Coloque o endereço do seu servidor (ou computador) no arquivo *mobile/src/services/api.tsx*
  <br/>
  2. Execute os comandos:
   
  ```
  # NÃO é preciso executar a linha abaixo caso ja tenha o Expo (CLI) instalado!
  npm install -g expo-cli
  //
  cd mobile
  npm install
  expo start
  ```

Será aberta no seu navegador a página localhost:19002. Conecte seu emulador, ou teste o aplicativo por LAN: baixe o aplicativo Expo da Play Store ou App Store e em seguida escaneie o código QR.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)](#crditos-)

## ➤ Créditos 

Aplicação criada durante o Next level Week, um evento criado pela [RocketSeat](https://rocketseat.com.br/) 🚀. <br/>
Aulas conduzidas pelo [Diego Fernandes](https://github.com/diego3g)