import plus from '../assets/images/icon-plus.svg';
import minus from '../assets/images/icon-minus.svg';
import './AddQuantity.css';
import '../App.css';

export function AddQuantity(props: {quantity: number, handleQuantityUpdate: (q: unknown) => void}) {
    return (
        <div className='add-quantity'>
            <img src={minus} alt="minus-icon" onClick={() => props.handleQuantityUpdate((prev: number) => prev > 0 ? prev - 1: prev)} />
            <p>{props.quantity}</p>
            <img src={plus} alt="plus-icon" onClick={() => props.handleQuantityUpdate((prev: number) => prev + 1)}/>
        </div>
    )
}