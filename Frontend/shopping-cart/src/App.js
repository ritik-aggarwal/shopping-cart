import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  //Switch,
  Route
} from 'react-router-dom';
import Index from "./pages/Index.js";
import Cart from "./pages/Cart.js";
import Footer from "./Component/Footer";
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router >
          <div>
            <Route exact path="/index" component={Index} />
            <Route exact path="/cart" component={Cart} />
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }
}
