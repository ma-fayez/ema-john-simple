import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, element) => total + element.price, 0); // eta na bujle nicher for loop diye kaj kora jabe
    
    let total = 0;
    for(let i = 0; i< cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }
    let shipping = 0;
    if(total>50){
        shipping = 0;
    }
    else if(total> 15){
        shipping = 4.99;
    }
    else if(total>0){
        shipping = 12.99
    }
    const subToal = total + shipping;
    const tax = (subToal / 5).toFixed(2);
    const grandTotal = (subToal + Number(tax)).toFixed(2);

    const bdAmount = (grandTotal * 84.96).toFixed(2);

    const formateNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div className="cart">
            <h2 className="order">Order Summary </h2>
            <h3 className="items"><FontAwesomeIcon icon={faShoppingCart}/> Items Ordered : {cart.length} </h3>
            <h4>Total Before Tax : <span className="values"> ${formateNumber(total)}</span> </h4>
            <h4>Shipping Cost : <span className="values">${shipping}</span> </h4>
            <h4>Price with shipping : <span className="values">${formateNumber(subToal)}</span> </h4>
            <h4>Estamated Tax : <span className="values">${tax}</span> </h4>
            <h3>Order Total : <span className="values"> ${grandTotal}</span> </h3>
            <h3>BD Amount : <span className="values"> {bdAmount}Tk</span> </h3>
            <button className="review-btn"><FontAwesomeIcon icon={faShoppingBag}/>  Review Your Order</button>
        </div>
    );
};

export default Cart;