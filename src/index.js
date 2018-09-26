import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './store/reducers';

import { logger } from './store/middleware';
import TodoContainer from './containers/TodoContainer';

import './styles.css';

const store = createStore(rootReducer, applyMiddleware());

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <TodoContainer />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
