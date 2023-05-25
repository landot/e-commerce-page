import deleteIcon from '/src/assets/icon-delete.svg';
import './Cart.css';

export function Cart(props: {quantity: number, handleRemoveItem: () => void}) {
    return (
        <div className='cart-overlay'>
            <div className='cart-header'>
                <h2>Cart</h2>
                <hr />
            </div>
            <div className='cart-content'>
                <div className='cart-details'>
                    <img src={`/assets/images/image-product-1.jpg`} alt="product-image" className='product-image'/>
                    <div className='cart-description'>
                        <p className='product-name'>Fall Limited Edition Sneakers</p>
                        <span>
                            <p className='product-cost'>$125.00 x {props.quantity}</p>
                            <p className='product-total'>${props.quantity * 125}.00</p>
                        </span>
                    </div>
                    <img className='remove' src={deleteIcon} alt="remove-product-icon" onClick={props.handleRemoveItem} />
                </div>
                <button>Checkout</button>
            </div>
        </div>
    )
}