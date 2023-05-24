import { ProductImages } from './ProductImages';
import './ProductImagesOverlay.css';

export function ProductImagesOverlay(props: {handleToggleOverlay: () => void}) {
    return (
        <div className='product-images-overlay'>
            <div className='overlay-content'>
                <ProductImages isOverlay={true} handleToggleOverlay={props.handleToggleOverlay}/>
            </div>
        </div>
    )
}