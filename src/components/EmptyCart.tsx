import './EmptyCart.css';

export function EmptyCart() {
    return (
        <div className='cart-overlay-empty'>
            <div className='cart-header'>
                <h2>Cart</h2>
                <hr />
            </div>
            <div className='cart-content'>
                <p>Your cart is empty.</p>
            </div>
        </div>
    )
}