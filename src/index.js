import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {configureStore} from "@reduxjs/toolkit"
import { Provider } from 'react-redux'
import CardReducer from "./store/cart"

const store = configureStore({
  reducer : CardReducer
})


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


