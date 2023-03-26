import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(p=>console.log(p))
                }
                {
                    products.map(product=><Product 
                       product={product} key={product.id}/>)
                }
                <h1>products  coming hear:{products.length}</h1>
            </div>
            <div className="cart-container">
                <h3>order summery</h3>
            </div>
        </div>
    );
};

export default Shop;