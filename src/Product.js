import React from 'react';
import './Product.css';

function Product({ id, title, price, image, rating }) {
    return (
        <div className="product">

            <div className="product_info">
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>

            <img
                className="product_image"
                src={image}
                alt=""
            />

            <button>Add to Basket</button>

        </div>
    );
}

export default Product;