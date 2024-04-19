import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => (
    <div className="product-list">
        {products.map((product, index) => (
            <ProductCard key={index} {...product} />
        ))}
    </div>
);

export default ProductList;
