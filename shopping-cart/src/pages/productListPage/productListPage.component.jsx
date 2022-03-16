import React, {useState, useEffect} from 'react';

import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
import ProductList from '../../components/product-list/product-list.component';

import './productListPage.styles.scss';
import ProductPage from '../productPage/productpage.component';

const  ProductListPage = ({match}) => {

    
const [productData, setProductData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/products")
          .then((response) => setProductData(response.data)) 
      },[]);

    return(
        <div className='productListPage'>
            <Routes>
                <Route path='/' element={<ProductList  productData={productData}/>} />
                <Route path=':productId' element={<ProductPage  productData={productData}/>} />
            </Routes>
        </div>
    )
};

export default ProductListPage;