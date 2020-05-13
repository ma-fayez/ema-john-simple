import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {img, name, quantity, key, price} = props.product;
    return (
        <div className="ReviewItem">
            <div className="review-img">
                <img src={img} alt=""/>
            </div>
           <div className="sub-review">
           <h3> {name} </h3>
            <h3> Quanttity : {quantity} </h3>
            <h4> ${price} </h4>
            <button 
            className="add-button"
            onClick={() => props.handleRemoveProduct(key)}
            >Remove Items</button>
           </div>
        </div>
    );
};

export default ReviewItem;