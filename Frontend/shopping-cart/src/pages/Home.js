import React from "react";
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return (
          <div style={{ textAllign: "center" , marginTop: "2em"}}>
              <h1 style={{color: "#fb6737"}}>BuyNow</h1>
              <p style={{fontSize: "20px"}}>Anything Anytime</p>
              <Link to="/index">Continue Shopping</Link>
          </div>
        );
    }
}
