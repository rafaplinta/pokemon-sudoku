import './App.css';
import PokemonProvider from './context/PokemonProvider';
import React from 'react';
import Header from './components/Header'
import Table from './components/Table';
import Input from './components/Input'
import Rules from './components/rules';

function App() {
  return (
    <PokemonProvider>
      
      <header className="App-header">
        <Header />
      </header>
      <body className="App-body">
        <Input />
        <Table />
        <Rules />
      </body>

    </PokemonProvider>
  );
}

export default App;
