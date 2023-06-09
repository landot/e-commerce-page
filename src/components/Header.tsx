import sneakersLogo from '/src/assets/logo.svg';
import cartIcon from '/src/assets/icon-cart.svg';
import avatar from '/src/assets/image-avatar.png';
import hamburgerIcon from '/src/assets/icon-menu.svg';
import { EmptyCart } from './EmptyCart';
import { useState } from 'react';
import { Cart } from './Cart';
import useWindowSize from '../utils/useWindowSize';
import './Header.css';

export function Header(
    props: {
        productsInCart: number, 
        handleCartRemove: () => void,
        openHamburgerMenu: () => void
    }) {
    const [showCart, setShowCart] = useState(false);
    const size = useWindowSize();

    return (
        <div className='header'>
            <div className='header-navigation'>
                {size.width && size.width < 500 && (
                        <img 
                            src={hamburgerIcon} 
                            alt="hamburger-icon" 
                            onClick={props.openHamburgerMenu}
                        />
                )}
                <img src={sneakersLogo} alt="sneakers-logo" className='logo' />
                <a href="" className='link'>Collections</a>
                <a href="" className='link'>Men</a>
                <a href="" className='link'>Women</a>
                <a href="" className='link'>About</a>
                <a href="" className='link'>Contact</a>
            </div>
            <div className='header-account'>
                <img src={cartIcon} alt="cart-icon" onClick={() => setShowCart(prev => !prev)}/>
                <img src={avatar} alt="profile-image" className='avatar' />
                {(showCart && props.productsInCart > 0) && <Cart quantity={props.productsInCart} handleRemoveItem={props.handleCartRemove}/>}
                {(showCart && props.productsInCart <= 0) && <EmptyCart />}
            </div>
        </div>
    )
}