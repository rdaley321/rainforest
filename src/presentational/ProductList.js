import React from 'react';
import { ProductCard } from './ProductCard';
export const ProductList = ({ products, onPurchase }) => (
    <div className="ui four column divided grid">
        {products.map( product => (
            <div className="column">
                <ProductCard {...product} onPurchase={() => onPurchase(product)} />
            </div>
        ))}
    </div>
)