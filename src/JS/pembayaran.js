import React, { Component } from 'react';
import wifi from '../img/wifi.png';
import pln from '../img/pln.png';
import phone from '../img/phone.png';
import '../App.css'

class Product extends Component {
  render() {
    return (
        <div>
            <div className="topUpBox">
                <img src={wifi} className="topup-logo" alt="logo" />
            </div>
            <div className="topUpBox">
                <img src={phone} className="topup-logo" alt="logo" />
            </div>
            <div className="topUpBox">
                <img src={pln} className="topup-logo" alt="logo" />
            </div>
        </div>
    );
  }
}

export default Product;
