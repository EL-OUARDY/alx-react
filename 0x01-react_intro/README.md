# ALX React — Webpack

0x01. React intro

`Front-end`
`JavaScript`
`ES6`
`React`

## 1. Creating a Basic JavaScript Application Using React

``React.js`` is a JavaScript library for building user interfaces. To create a basic application:

1. **Install Node.js**: Ensure Node.js is installed on your system.
2. **Create the Project Folder**: 
   ```bash
   mkdir my-react-app
   cd my-react-app
   ```
3. **Initialize the Project**:
   ```bash
   npm init -y
   ```
4. **Install React and ReactDOM**:
   ```bash
   npm install react react-dom
   ```
5. **Create `index.html`**: In the `public` directory, create an `index.html` file:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>React App</title>
   </head>
   <body>
       <div id="root"></div>
       <script src="../src/index.js"></script>
   </body>
   </html>
   ```
6. **Create `index.js`**: In the `src` directory, create an `index.js` file:
   ```javascript
   import React from 'react';
   import ReactDOM from 'react-dom';

   const App = () => {
       return <h1>Hello, React!</h1>;
   };

   ReactDOM.render(<App />, document.getElementById('root'));
   ```

## 2. Using `create-react-app` to Start Developing Quickly

`create-react-app` is a command-line tool that helps set up a new React project quickly without manual configuration.

1. **Install `create-react-app` globally** (optional):
   ```bash
   npm install -g create-react-app
   ```
2. **Create a New React App**:
   ```bash
   npx create-react-app my-app
   cd my-app
   ```
3. **Start the Development Server**:
   ```bash
   npm start
   ```
   This will start the development server and open the app in your default web browser.

## 3. Understanding and Using JSX

JSX stands for JavaScript XML. It allows you to write HTML inside JavaScript and makes the syntax of creating React components simpler.

Example of JSX:
```javascript
const element = <h1>Hello, world!</h1>;
```

### Key Points:
- **Embedding Expressions**: You can embed JavaScript expressions inside JSX using curly braces `{}`.
- **JSX is Not HTML**: JSX is syntactic sugar for `React.createElement()`.

## 4. Using React Developer Tools to Debug Your Code

React Developer Tools is a browser extension that allows you to inspect the React component hierarchy in the browser.

1. **Install the Extension**:
   - Chrome: [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
   - Firefox: [React Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

2. **Using the Tools**:
   - Inspect components.
   - Check state and props.
   - Debug issues directly from the browser.

## 5. Using Enzyme’s Shallow Rendering to Test Your Application

**Enzyme** is a testing utility for React that makes it easier to assert, manipulate, and traverse your React components.

1. **Install Enzyme and Adapter**:
   ```bash
   npm install --save enzyme enzyme-adapter-react-16
   ```

2. **Setup Enzyme**:
   ```javascript
   import { configure } from 'enzyme';
   import Adapter from 'enzyme-adapter-react-16';

   configure({ adapter: new Adapter() });
   ```

3. **Shallow Rendering**:
   ```javascript
   import { shallow } from 'enzyme';
   import App from './App';

   it('renders without crashing', () => {
       shallow(<App />);
   });
   ```

## 6. Using React with Webpack & Babel

To manually set up React with Webpack and Babel:

1. **Install Dependencies**:
   ```bash
   npm install webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react react react-dom
   ```

2. **Create `webpack.config.js`**:
   ```javascript
   const path = require('path');

   module.exports = {
       entry: './src/index.js',
       output: {
           path: path.resolve(__dirname, 'dist'),
           filename: 'bundle.js'
       },
       module: {
           rules: [
               {
                   test: /\.(js|jsx)$/,
                   exclude: /node_modules/,
                   use: {
                       loader: 'babel-loader'
                   }
               }
           ]
       },
       resolve: {
           extensions: ['.js', '.jsx']
       },
       devServer: {
           contentBase: path.join(__dirname, 'dist'),
           compress: true,
           port: 9000
       }
   };
   ```

3. **Create `.babelrc`**:
   ```json
   {
       "presets": ["@babel/preset-env", "@babel/preset-react"]
   }
   ```

4. **Create `index.js` and `index.html`** similar to the basic setup.

5. **Run Webpack**:
   ```bash
   npx webpack serve
   ```
   This will start the Webpack Dev Server, and you can view your React app in the browser.


## Contact Me

**Email:** ouadia@elouardy.com \
**Twitter:** https://twitter.com/_ELOUARDY
