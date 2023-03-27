import React, { useEffect, useState } from 'react';
import OrderSummery from '../OrderSummery/OrderSummery';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const handleAddToCart=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart)

            }
    return (
        <div className='shop-container'>
            <div className="products-container">
             
                {
                    products.map(product=><Product handleAddToCart={handleAddToCart}
                       product={product} key={product.id}/>)
                }
             
            </div>
            <div className="cart-container">
             <OrderSummery item={cart.length}/>

            </div>
        </div>
    );
};

export default Shop;