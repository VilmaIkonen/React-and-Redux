import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import inputReducer from './reducers/inputReducer';
import listReducer from './reducers/listReducer';
import './index.css';
import App from './App';

const rootReducer = combineReducers({
  in: inputReducer,
  ls: listReducer
})

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);

