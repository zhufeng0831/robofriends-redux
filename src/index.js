import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import './index.css';
//import Hello from './Hello';   //connect to the file while build the webpage, 连接到Hello.js, Hello.js定义webpage的内容
import App from './containers/App'
// import Card from './Card'
// import CardList from './CardList'
import * as serviceWorker from './serviceWorker';
import 'tachyons';
// import { robots } from './robots';   //robots is not default, so it needs destructure
import { searchRobots, requestRobots } from './reducers';
// ReactDOM.render(
//   <React.StrictMode>
//     <Hello greeting={'Hello' + 'React Ninja'}/>.  //greetings is props  
//   </React.StrictMode>,
//   document.getElementById('root')   //connect to index.html
// );

//写法1
// ReactDOM.render(
//   <React.StrictMode>
//   	<div>
//     	<Card id = {robots[0].id} name = {robots[0].name} email = {robots[0].email}/> 
//     	<Card id = {robots[1].id} name = {robots[1].name} email = {robots[1].email}/>
//     	<Card id = {robots[2].id} name = {robots[2].name} email = {robots[2].email}/>
//     </div>
//   </React.StrictMode>,
//   document.getElementById('root')   //connect to index.html
// );

//写法2
// ReactDOM.render(
//   <React.StrictMode>
//   	<CardList robots={robots}/>
//   </React.StrictMode>,
//   document.getElementById('root')   //connect to index.html
// );
const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))
//provider component passes down the store to the components.
ReactDOM.render(
  <React.StrictMode>
  	<Provider store={store}>
  		<App />
  	</Provider>
  </React.StrictMode>,
  document.getElementById('root')   //connect to index.html
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
