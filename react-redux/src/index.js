import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';

// Middleware
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

// CSS
import './index.css';

//Components
import App from './App';

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
