import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';
import Promo from './JS/promo';
import Pembayaran from './JS/pembayaran';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="promoTopUp">
          <div className="promoBox">
            <Promo/>
          </div>
          <div className="pembayaran">
            <Pembayaran />
          </div>
        </div>
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
