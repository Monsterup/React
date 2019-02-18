import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Product judul = "Sempak Turbo (class component)" harga = "1M"/>
          <Product judul = "Sempak Turbo (class component)" harga = "1M"/>
          <Product judul = "Sempak Turbo (class component)" harga = "1M"/>
          <Product judul = "Sempak Turbo (class component)" harga = "1M"/>
        </header>
      </div>
    );
  }
}

export default App;
