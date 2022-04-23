import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { socketMiddleware } from './middleware/socketMiddleware';

const baseUrl = process.env.NODE_ENV === 'development' ? "https://3001-melodicalbu-gitpodmysql-cs5vza2ukqv.ws-us41.gitpod.io" : "https://3001-melodicalbu-gitpodmysql-cs5vza2ukqv.ws-us41.gitpod.io";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, socketMiddleware(baseUrl || ''))));

console.log(baseUrl)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);