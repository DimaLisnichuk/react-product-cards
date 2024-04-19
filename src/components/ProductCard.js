import React from 'react';

const ProductCard = ({ name, price, description, image }) => (
    <div className="product-card">
        <div className="product-details">
            <h2 className="product-name">{name}</h2>
            <p className="product-description">{description}</p>
            <img className="product-image" src={image} alt={name} />
            <p className="product-price">Price: ${price}</p>
        </div>
    </div>
);

export default ProductCard;
