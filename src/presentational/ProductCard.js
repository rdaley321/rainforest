import React from 'react'
export const ProductCard = ({ image_url, title, brand, price, purchased, onPurchase }) => (
    <div className="ui fluid card">
        <div className="image">
            <img src={image_url}></img>
        </div>
        <div className="content">
            <p className="header">{brand} ${price}</p>
            <p>{title}</p>
            <button onClick={onPurchase} className={purchased ? 'ui button disableds' : 'ui button primary'}>
                { purchased ? 'Already Purchased' : 'Buy' }
            </button>
        </div>
    </div>
)