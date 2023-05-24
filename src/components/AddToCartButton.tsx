import cartIcon from '../assets/images/icon-cart.svg'
import './AddToCartButton.css';

export function AddToCartButton(props: {handleCartUpdate: () => void}) {
    return (
        <div 
            className='add-to-cart-button'
            onClick={props.handleCartUpdate}
        >
            <img src={cartIcon} alt="cart-icon" />
            {/* todo make fill color white */}
            <button>Add to cart</button>
        </div>
    )
}