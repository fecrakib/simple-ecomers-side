import React from 'react';
import './Product.css'
const Product = (props) => {
    
    const {img,name,price,ratings,seller}=props.product;
    
    return (
        <div className='cart'>
          <div className='img'>
          <img src={img} alt="" />
          </div>
           <div className="cart-description">
           <h4>{name}</h4>
            <h4>Price:${price}</h4>
            <h4>Manufacturer: {seller}</h4>
            <h4>Rating: {ratings} start</h4>
            </div> 
            <div className="btn">   <button>Add to Cart</button></div>
          
        </div>
    );
};

export default Product;