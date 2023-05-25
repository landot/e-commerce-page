import { SetStateAction, useState } from 'react';
import nextArrow from '/public/icon-next.svg';
import previousArrow from '/public/icon-previous.svg';
import { ReactComponent as ExitIcon } from '/public/icon-close.svg';
import useWindowSize from '../utils/useWindowSize';
import './ProductImages.css';

export function ProductImages(props: {isOverlay: boolean, handleToggleOverlay: (b: SetStateAction<boolean>) => void}) {
    const [selectedImage, setSelectedImage] = useState(1);
    const size = useWindowSize();

    return (
        <div className='product-images'>
            {props.isOverlay && (
                <ExitIcon 
                    className='exit-button'         
                    onClick={() => props.handleToggleOverlay(false)}
                />
            )}
            <div className='selected-image-container'>
                <img 
                    className='selected-image' 
                    src={`public/image-product-${selectedImage}.jpg`} 
                    alt="" 
                    onClick={() => !props.isOverlay && (size.width && size.width >= 500) ? props.handleToggleOverlay((prev: boolean) => !prev): null}
                />
                {props.isOverlay || (size.width && size.width < 500) && (
                    <>
                        <div 
                            className='arrow-container next'
                            onClick={() => setSelectedImage(prev => prev < 4 ? prev + 1: prev)}
                        >
                            <img 
                                src={nextArrow} 
                                alt="next-image-arrow" 
                                className='arrow'
                            />
                        </div>
                        <div 
                            className='arrow-container previous'
                            onClick={() => setSelectedImage(prev => prev > 1 ? prev - 1: prev)}
                        >
                            <img 
                                src={previousArrow} 
                                alt="previous-image-arrow" 
                                className='arrow'
                            />
                        </div>
                    </>

                )}
            <div className='thumbnails'>
                <img 
                    src='public/image-product-1-thumbnail.jpg' 
                    alt=""
                    onClick={() => setSelectedImage(1)}
                    className={`thumbnail${selectedImage === 1 ? ' selected-thumbnail': ''}`}
                />
                <img 
                    src='public/image-product-2-thumbnail.jpg' 
                    alt=""
                    onClick={() => setSelectedImage(2)}
                    className={`thumbnail${selectedImage === 2 ? ' selected-thumbnail': ''}`}
                />
                <img 
                    src='public/image-product-3-thumbnail.jpg' 
                    alt=""
                    onClick={() => setSelectedImage(3)}
                    className={`thumbnail${selectedImage === 3 ? ' selected-thumbnail': ''}`}
                />
                <img 
                    src='public/image-product-4-thumbnail.jpg' 
                    alt=""
                    onClick={() => setSelectedImage(4)}
                    className={`thumbnail${selectedImage === 4 ? ' selected-thumbnail': ''}`}
                />
            </div>
        </div>
    </div>
    )
}