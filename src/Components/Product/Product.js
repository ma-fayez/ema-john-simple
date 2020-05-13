import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name, img, seller, price, stock, key} = props.products;
    return (
        <div className="product">
            <div className="product-img">
               <img src={img} alt=""/>
            </div>
            <div className="product-menu">
                <h3 className="product-name"> <Link to={"/product/"+key}>{name}</Link> </h3> 
                <br/>
                <p><small> By : {seller} </small></p>
                <p>${price} </p>   
                <p>Only {stock} left in stock soon</p>
                {props.ShowAddToCart && <button className="add-button" onClick={() => props.handleAddProduct(props.products)}> <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>}
            </div>
        </div>
    );
};

export default Product;