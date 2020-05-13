import React, { useEffect } from 'react';
import './Review.css';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import happyImage from '../../images/giphy.gif';
import './Review.css';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const hanldePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    const handleRemoveProduct = (productKey) =>{
        // console.log("Remove clicked", productKey)
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(()=> {
        //cart
        const SaveCart = getDatabaseCart();
        const productKey = Object.keys(SaveCart);
        const counts = productKey.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = SaveCart[key];
            return product;
        });
        setCart(counts);
    }, []);
    let thankYou;
    if(orderPlaced){
        thankYou = <img src={happyImage} alt=""/>
    }
    return (
        <div className="Review">
            <div className="product-container">
            {
                cart.map(pd => <ReviewItem 
                    handleRemoveProduct = {handleRemoveProduct}
                    product={pd}></ReviewItem>)
            }
            { thankYou }
            </div>
            <div className="review-cart">
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={hanldePlaceOrder} className="review-btn"><FontAwesomeIcon icon={faShoppingBag}/> Place Order</button>
                </Cart>
            </div>
            </div>
        </div>
    );
};

export default Review;