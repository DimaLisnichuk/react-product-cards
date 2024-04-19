import React from 'react';
import ProductList from './components/ProductList';
import './App.css';
import productImage from './assets/p.webp';



const App = () => {
    const products = [
        {
            name: "Product 1",
            price: 19.99,
            description: "Description for Product 1",
            image: productImage
        },
        {
            name: "Product 2",
            price: 29.99,
            description: "Description for Product 2",
            image: productImage
        },
        {
          name: "Product 3",
          price: 39.99,
          description: "Description for Product 3",
          image: productImage
        },
        {
            name: "Product 4",
            price: 49.99,
            description: "Description for Product 4",
            image: productImage
        },
        {
          name: "Product 5",
          price: 59.99,
          description: "Description for Product 5",
          image: productImage
        },
        {
          name: "Product 6",
          price: 69.99,
          description: "Description for Product 6",
          image: productImage
        },
        {
          name: "Product 7",
          price: 79.99,
          description: "Description for Product 7",
          image: productImage
        },
        {
          name: "Product 8",
          price: 89.99,
          description: "Description for Product 8",
          image: productImage
        }
    ];

    return (
        <div className="app">
            <h1 className="app-title">ORANGE SHOP</h1>
            <ProductList products={products} />
        </div>
    );
}

export default App;