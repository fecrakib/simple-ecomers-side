import React from "react";
import './OrderSummery.css'
const OrderSummery = ({total,selectedItem,shippingCharge,tax,grandTotal}) => {
 
  return (
    <div className="order-summary">
  
      <div  className="product-summary">
      {/* <h2>Order Summary</h2> */}
      <h4>Selected Item:{selectedItem}</h4>
      <h4>Total price:${total.toFixed(2)}</h4>
      <h4> Total Shipping Charge:${shippingCharge.toFixed(2)}</h4>
      <h4>Tax:${tax.toFixed(2)}</h4>
      <h4>Grand Total:${grandTotal.toFixed(2)}</h4>
      </div>
      <div className="oredr-btn">
        <button className="btn-clear">Clear Cart</button>
        <button className="btn-checkout">Proceed Checkout</button>
      </div>

    </div>
  );
};

export default OrderSummery;
