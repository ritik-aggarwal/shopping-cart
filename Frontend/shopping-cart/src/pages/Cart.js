import React, { Component } from "react";
import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
//import { autheticate } from '../actions/sessionAction'
class Cart extends Component {
  render() {
    return (
      <div className="App">

        <div className="jumbotron">
          <div className="container text-center">
            <h1>Your Cart</h1>
            <p>BuyNow, anything anytime</p>
          </div>
        </div>
        <div className="container">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody id="tablebody">


            </tbody>
          </table>
        </div>


      </div>
    );
  }
}

export default Cart;
