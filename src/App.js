import React from 'react';
import './App.css';
import Variables from './components/Variables';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
      <h1>Hello world!</h1>
      <br/>
      <a href='https://demo.bs.prefapp.es/' target='_blank' >Demo prefapp Backstage</a>
      
      <Variables />
      </header>
    </div>
  );
}

export default App;
