import { Dispatch, SetStateAction } from 'react';
import { HamburgerMenu } from './HamburgerMenu';
import './HamburgerOverlay.css';

export function HamburgerOverlay(props: {handleOverlayToggle: Dispatch<SetStateAction<boolean>>}) {
    return (
        <div className='hamburger-overlay'>
            <HamburgerMenu handleOverlayToggle={props.handleOverlayToggle}/>
        </div>
    )
}