import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../../components/product-list/product-list.component';

const ProductPage= ({productData}) => {

    const [filteredProducts, setFilteredProducts] = useState([]);
    const { productId } = useParams();
    
    useEffect(() => {
        const filterData = productData.filter(product => productId === product.category);
        setFilteredProducts(filterData)
    },[productData, productId]);

    return(
        <div className='product-page'>
            <ProductList productData={filteredProducts}/>
        </div>
    );
};

export default ProductPage;