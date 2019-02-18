import React, { Component } from 'react';
import img from '../img/tokped.jpg';
import '../App.css'

class Product extends Component {
  render() {
    return (
        <div>
            <img src={img} className="promo-logo" alt="logo" />
        </div>
    );
  }
}

export default Product;
