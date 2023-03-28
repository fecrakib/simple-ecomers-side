import React from 'react';
import './Product.css'
import { BsCartPlus } from "react-icons/bs";
const Product = (props) => {
// console.log(props)
    const {img,name,price,ratings,seller}=props.product;

const handleAddCart=props.hadleAddCart;

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
            <div className="btn">   <button onClick={()=> handleAddCart(props.product) }>Add to Cart<BsCartPlus /> </button></div>
          
        </div>
    );
};

export default Product;