import exitIcon from '../../public/images/icon-close.svg';
import './HamburgerMenu.css';

export function HamburgerMenu(props: {handleOverlayToggle: (b: boolean) => void}) {
    return (
        <div className='menu'>
            <img src={exitIcon} alt="exit icon" onClick={() => props.handleOverlayToggle(false)}/>
            <nav className='menu-links'>
                <a href="">Collections</a>
                <a href="">Men</a>
                <a href="">Women</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </nav>
        </div>
    )
}