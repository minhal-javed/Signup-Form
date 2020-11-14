import React from 'react';

import './App.css';
import Signup from './components/Form'
import {NavBar} from './components/Nav'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Signup/>
    </div>
  );
}

export default App;

