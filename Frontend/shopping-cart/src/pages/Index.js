import React, { Component } from "react";
import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
//import { autheticate } from '../actions/sessionAction'
class Index extends Component {
  render() {
    return (
      <div className="App">


        <div className="jumbotron">
          <div className="container text-center">
            <h1>Samsung Store</h1>
            <p>BuyNow, anything anytime</p>
          </div>
        </div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand">Logo</a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li className="active"><a>Home</a></li>
                <li><a>Products</a></li>
                <li><a>Deals</a></li>
                <li><a>Stores</a></li>
                <li><a>Contact</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a><span className="glyphicon glyphicon-user"></span> Your Account</a></li>
                <li><a><Link to="/cart"><span className="glyphicon glyphicon-shopping-cart"></span> Cart</Link></a></li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-sm-4 text-center" >
              <div className="panel panel-primary">
                <div className="panel-heading" id="item1">Samsung Galaxy S8+</div>
                <div className="panel-body"><img src="samsung.png" className="img-responsive image_property" alt=""/></div>
                <div className="panel-footer">
                  <div className="row">
                    <div className="col-sm-8">
                      Best buy price: $<span className="item-cost">99</span><br/>You save: $10.55
                    </div>
                    <div className="col-sm-4">
                      <input className="add-to-cart" type="button" name="button_1" value="Add to cart"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 text-center" >
              <div className="panel panel-primary">
                <div className="panel-heading" id="item2">Samsung Galaxy S8</div>
                <div className="panel-body"><img src="samsung.png" className="img-responsive image_property" alt=""/></div>
                <div className="panel-footer">
                  <div className="row">
                    <div className="col-sm-8">
                      Best buy price: $<span className="item-cost">99</span><br/>You save: $10.55
                    </div>
                    <div className="col-sm-4">
                      <input className="add-to-cart" type="button" name="button_2" value="Add to cart"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 text-center" >
              <div className="panel panel-primary">
                <div className="panel-heading" id="item3">Samsung Galaxy C9 Pro</div>
                <div className="panel-body"><img src="samsung.png" className="img-responsive image_property" alt=""/></div>
                <div className="panel-footer">
                  <div className="row">
                    <div className="col-sm-8">
                      Best buy price: $<span className="item-cost">109</span><br/>You save: $12.59
                    </div>
                    <div className="col-sm-4">
                      <input className="add-to-cart" type="button" name="button_3" value="Add to cart"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 text-center" >
              <div className="panel panel-primary">
                <div className="panel-heading" id="item4">Samsung Galaxy S7 Edge</div>
                <div className="panel-body"><img src="samsung.png" className="img-responsive image_property" alt=""/></div>
                <div className="panel-footer">
                  <div className="row">
                    <div className="col-sm-8">
                      Best buy price: $<span className="item-cost">89</span><br/>You save: $9.99
                    </div>
                    <div className="col-sm-4">
                      <input type="button" className="add-to-cart" name="button_4" value="Add to cart"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 text-center" >
              <div className="panel panel-primary">
                <div className="panel-heading" id="item5">Samsung Galaxy S7</div>
                <div className="panel-body"><img src="samsung.png" className="img-responsive image_property" alt=""/></div>
                <div className="panel-footer">
                  <div className="row">
                    <div className="col-sm-8">
                      Best buy price: $<span className="item-cost">139</span><br/>You save: $13.49
                    </div>
                    <div className="col-sm-4">
                      <input className="add-to-cart" type="button" name="button_5" value="Add to cart"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 text-center" >
              <div className="panel panel-primary">
                <div className="panel-heading" id="item6">Samsung Galaxy A8</div>
                <div className="panel-body"><img src="samsung.png" className="img-responsive image_property" alt=""/></div>
                <div className="panel-footer">
                  <div className="row">
                    <div className="col-sm-8">
                      Best buy price: $<span className="item-cost">149</span><br/>You save: $15.99
                    </div>
                    <div className="col-sm-4">
                      <input className="add-to-cart" type="button" name="button_6" value="Add to cart"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><br/>


      </div>
    );
  }
}

export default Index;
