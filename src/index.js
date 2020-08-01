import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
// import BandInput from "./components/BandInput"
import { Provider } from 'react-redux'
import manageBand from './reducers/manageBand'

const store = createStore(manageBand)
window.store = store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
