import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';


const Shop = () => {
const first10 = fakeData.slice(0,10);
const [products, setProducts] = useState(first10);
//Handler
const [cart, setCart] = useState([]);

useEffect(()=>{
    const SaveCart = getDatabaseCart();
    const productKey = Object.keys(SaveCart);
    const previousCart = productKey.map( pdKey => {
        const product = fakeData.find(pd => pd.key === pdKey);
        product.quantity = SaveCart[pdKey];
        return product;
    })
    setCart(previousCart);
}, [])

const handleAddProduct = (products) =>{
    const toBeAddesKey = products.key;
    const sameProduct = cart.find(pd => pd.key === toBeAddesKey);
    let count = 1;
    let newCart;
    if(sameProduct){
        const count = sameProduct.quantity + 1;
        sameProduct.quantity = count;
        const others = cart.filter(pd => pd.key !== toBeAddesKey);
        newCart = [...others, sameProduct]
    }
    else{
        products.quantity = 1;
        newCart = [...cart, products];
    }
    setCart(newCart);
    addToDatabaseCart(products.key, count);
    // console.log(products);
}

    return (
        <div className="shop-container">
            <div className="product-container">
                    {
                        products.map(items => <Product key={items.key} ShowAddToCart={true} handleAddProduct={handleAddProduct} products={items}></Product>)
                    }
            </div>
            <div className="cart-container">
               <Cart cart={cart}>
               <Link to="/review">
             <button className="review-btn"><FontAwesomeIcon icon={faShoppingBag}/> Review Your Order</button>
            </Link>
               </Cart>
            </div>
        </div>
     
    );
};

export default Shop;