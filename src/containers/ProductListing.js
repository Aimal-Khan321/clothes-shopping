/*eslint-disable */
import React from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent'

const ProductListing = () => {
    const products = useSelector((state) => state)
    const dispatch = useDispatch();

    useEffect(() => {
        fetchProducts();//eslint-disable-line
    }, []); //eslint-disable-line

    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Error", err);
            });
        dispatch(setProducts(response.data));//eslint-disable-line
    };

    console.log("Products===>", products);
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    );
}

export default ProductListing;
