import Input from '../UI/Input';
import classes from './SingleMealForm.module.css';
import CartContext from '../../store/Cart-Context';
import {useContext, useRef} from 'react';
const SingleMealForm = (props) => {
    const cartCtx = useContext(CartContext);
    const amountInputRef = useRef();
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(amountInputRef.current.value);
        cartCtx.addItem({
            ...props.meal,
            amount: +amountInputRef.current.value,
        });
    }; 


    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label="Amount" ref={amountInputRef} input={{
                id:'amount',
                type: 'number',
                min: 1,
                max: 5,
                defaultValue: 1,
                step: 1,
            }} />
            <button>+ Add</button>
        </form>
     );
}
 
export default SingleMealForm;