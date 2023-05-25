import { useState } from 'react';
import { AddQuantity } from './AddQuantity';
import { AddToCartButton } from './AddToCartButton';
import './ProductDescription.css';

export function ProductDescription(props: {handleCartUpdate: (q: number) => void }) {
    const [quantity, setQuantity] = useState(0);
    return (
        <div className='product-description'>
            <h3 className='product-company'>sneaker company</h3>
            <h1 className='product-title'>Fall Limited Edition Sneakers</h1>
            <p className='description'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div className='price-section'>
                <div className='price'>
                    <h2 className='actual-price'>$125.00</h2>
                    <p className='discount'>50%</p>
                </div>
                <h3 className='original-price'>$250.00</h3>
            </div>
            <div className='add'>
                <AddQuantity quantity={quantity} handleQuantityUpdate={setQuantity} />
                <AddToCartButton handleCartUpdate={() => props.handleCartUpdate(quantity)}/>
            </div>
        </div>
    )
}