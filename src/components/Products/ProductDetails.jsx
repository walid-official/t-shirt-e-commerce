import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ProductDetail from './ProductDetail';

const ProductDetails = () => {
    const productsData = useLoaderData();
    const [productsCard,setProductsCard] = useState([])
    const {productId} = useParams();
     console.log(productId);
     
    useEffect(() => {
        if(productId){
            const productByCategory = productsData.filter(product => product.category === productId);
            setProductsCard(productByCategory)
        }
        else{
            setProductsCard(productsData)
        }
    },[productsData,productId])

    return (
        <div className='pb-32'>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-3">
                {
                    productsCard.map((singleProduct,index) => <ProductDetail key={index} products={singleProduct}></ProductDetail>)
                }
            </div>
        </div>
    );
};

export default ProductDetails;