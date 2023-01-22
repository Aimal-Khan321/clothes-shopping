/*eslint-disable */
import React from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent'

const ProductListing = () => {
    const products = useSelector((state) => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());//eslint-disable-line
    }, []); //eslint-disable-line

    console.log("Products===>", products);
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    );
}

export default ProductListing;
