import React from "react";
import './OrderSummery.css'
const OrderSummery = (props) => {
    console.log(props)
  return (
    <div>
  
      <div  className="product-summary">
      <h1>Order Summary</h1>
      <h4>Selected price:{props.item}</h4>
      <h4> Total Shipping Charge:$</h4>
      <h4>Grand Total:$</h4>
      </div>
      <div className="oredr-btn">
        <button className="btn-clear">Clear Cart</button>
        <button className="btn-checkout">Proceed Checkout</button>
      </div>

    </div>
  );
};

export default OrderSummery;
