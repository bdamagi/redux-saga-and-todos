import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { assertCompletionStatement } from '@babel/types';
import { map } from 'async';

import { Provider } from 'react-redux'
import { Todos } from './pages'
import store from './store'



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Todos />
      </Provider>

    </div>
  );
}

export default App;



