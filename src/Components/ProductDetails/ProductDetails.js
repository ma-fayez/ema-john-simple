import React from 'react';
import './ProductDetails.css'
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {productkey} = useParams();
    const products = fakeData.find(pd => pd.key === productkey);
    return (
        <div className="ProductDetails">
            <div className="sub-ProductDetails">
                <Product ShowAddToCart= {false} products={products}></Product>
            </div>
            
        </div>
    );
};

export default ProductDetails;