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
    const handleAddCart=(product)=>{
       const newCart=[...cart,product];
       setCart(newCart)
    }
  const total=cart.reduce((prviousValue,currentValue)=>prviousValue+currentValue.price,0)
 const shippingCharge=cart.reduce((previoudValue,currentValue)=>previoudValue+currentValue.shipping,0)
 const tax=total*5/100;
 const grandTotal=tax+total+shippingCharge;
           
    
    return (
        <div className='shop-container'>
            <div className="products-container">
             
                {
                    products.map(product=><Product hadleAddCart={handleAddCart}
                       product={product} key={product.id}/>)
                }
             
            </div>
            <div className="cart-container">
                <OrderSummery total={total} 
                selectedItem={cart.length} 
                shippingCharge={shippingCharge} 
                tax={tax}
                grandTotal={grandTotal} />

            </div>
        </div>
    );
};

export default Shop;