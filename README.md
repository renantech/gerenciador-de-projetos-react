# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Estudos
## API, useEffect
Tudo se faz possível graças ao "fetch" e o arquivo "db.json" que simula um banco de dados (uma API para ser mais exato). Resumindo, o "fetch" pode buscar ou mandar dados para o arquivo "db.json", tudo depende do method que será passado (GET busca estes dados, enquanto o POST os envia). Em ambos os casos, além do method, é implantado o atributo headers que seria uma propriedade adicional para estes dados (no caso do projeto é indicar que os dados estão em JSON), e no caso do POST, tem também a propriedade body, que vai indicar com que corpo nós vamos enviar estes dados para a API (aqui no caso é indicado que o envio será pelo método JSON.stringify(), ou seja, transformar nossos dados em JSON antes de mandar pra API). Para o method: GET não é necessário este corpo pois nós só estamos buscando estes dados.

Outro ponto interessante é sobre o useEffect. Na hora de buscar os dados, para que os mesmos aconteçam somente uma vez, é usado o useEffect (que por padrão tem que receber uma função e um array de dependências, este que no caso do vídeo está vazio). Ele somente será executado quando qualquer elemento deste array for modificado. E uma coisa interessante, sua execução é disparada a nível do componente, ou seja, diferente de uma função que é chamada pelo nome, este é chamado a cada mudança em qualquer elemento no array de dependências. Ou seja, sua execução está atrelada a nível de componente, e não por escopo de chaves. 

Se no useEffect não for passado este array como segundo parâmetro, ele vai disparar toda vez que um evento acontecer em qualquer lugar dentro do componente.
Se no mesmo o array estiver vazio (como no vídeo), ele executa apenas uma vez, exatamente na hora de carregar a página.
E se caso tive

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
