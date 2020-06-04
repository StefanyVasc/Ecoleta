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

Caso queira acessar o layout basta [clicar aqui](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/)



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

    1.Coloque o endereço do seu servidor (ou computador) no arquivo src/services/api.ts
    2. Execute os comandos:
   
  ```
  # NÃO é preciso executar a linha abaixo caso ja tenha o Expo (CLI) instalado!
  npm install -g expo-cli
  cd mobile
  npm install
  expo start
  ```

Será aberta no seu navegador a página localhost:19002. Conecte seu emulador, ou teste o aplicativo por LAN: baixe o aplicativo Expo da Play Store ou App Store e em seguida escaneie o código QR.

