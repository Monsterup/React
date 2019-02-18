import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="box">
            <Product judul = "Sempak Turbo" harga = "1M"/>
          </div>
          <div className="box">
            <Product judul = "Sempak Turbo" harga = "1M"/>
          </div>
          <div className="box">
            <Product judul = "Sempak Turbo" harga = "1M"/>
          </div>
          <div className="box">
            <Product judul = "Sempak Turbo" harga = "1M"/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
