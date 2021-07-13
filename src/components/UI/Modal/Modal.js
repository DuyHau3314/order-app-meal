import classes from './Modal.module.css';
import { useContext } from 'react';
import CartContext from '../../../store/Cart-Context';

const Modal = (props) => {
    const cartCtx = useContext(CartContext);

    const handleAdd = (item) => {
        const mealItem = {
            ...item, amount: 1
        };
        cartCtx.addItem(mealItem);
    };

    const handleRemove = (id) => {
        cartCtx.removeItem(id);
    };

    const renderMeals = cartCtx.items.map(item => {
        return (
            <div key={item.id} className={classes.order}>
                <div className={classes['order-meal']}>
                    <h3>{item.name}</h3>
                    <h4>{item.price.toFixed(2)}</h4>
                </div>
                <div className={classes.amount}>
                    <p>x${item.amount}</p>
                </div>
                <div className={classes.button}>
                    <button onClick={() => handleRemove(item.id)}>-</button>
                    <button onClick={() => handleAdd(item)}>+</button>
                </div>
            </div>
        )
    })
    return ( 
        <div className={classes.modal}>
            <h2 style={{textAlign: 'center', marginTop: '1rem'}}>Order Summary</h2>
            <div className={classes.content}>
            {renderMeals}
             </div>
            
            <div className={classes.total}>
                <span><h2>Total Money:</h2></span>
                <span><h3>{Math.abs(cartCtx.totalAmount.toFixed(2))}</h3></span>
            </div>
        </div>
     );
}
 
export default Modal;