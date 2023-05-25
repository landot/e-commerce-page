import { ReactComponent as CartIcon } from '/src/assets/icon-cart.svg';

import './AddToCartButton.css';

export function AddToCartButton(props: {handleCartUpdate: () => void}) {
    return (
        <div 
            className='add-to-cart-button'
            onClick={props.handleCartUpdate}
        >
            <CartIcon className='cart-icon' />
            <button>Add to cart</button>
        </div>
    )
}