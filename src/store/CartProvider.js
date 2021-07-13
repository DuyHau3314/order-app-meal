import {useReducer} from 'react';
import CartContext from './Cart-Context';


////////////////////////////////
const initialValue = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const {item} = action;
        let updatedCartItems;
        const existsItemIndex = state.items.findIndex(cartItem => cartItem.id === item.id);
        const existsItem = state.items[existsItemIndex];
        if(existsItem){
            const updatedItem = {
                ...existsItem, amount: existsItem.amount + item.amount
            };
            updatedCartItems = [...state.items];
            updatedCartItems[existsItemIndex] = updatedItem;
        }
        else {
            updatedCartItems = [...state.items, action.item];
        }
        return {
            items: updatedCartItems,
            totalAmount: state.totalAmount + action.item.price * action.item.amount
        }
    }

    if(action.type === 'REMOVE') {
        const cartItem = state.items.find(item => item.id === action.id);
        const cartItemIndex = state.items.findIndex(item => item.id === action.id)
        let updatedCartItems;
        let totalAmount = state.totalAmount;
        if(cartItem.amount > 1){
            const cartItemUpdated = {
                ...cartItem, amount: cartItem.amount - 1
            }
            updatedCartItems = [...state.items];
            updatedCartItems[cartItemIndex] = cartItemUpdated;
            totalAmount = state.totalAmount - cartItem.price;
        } else {
            updatedCartItems = state.items.filter(item => item.id !== action.id);
            totalAmount = totalAmount - cartItem.price;
        }
        return {
            items: updatedCartItems,
            totalAmount: totalAmount,
        }
    }
    return state;
};


////////////////////////////////
const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, initialValue);

    const addItemCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item});
    };

    const removeItemCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id});
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemCartHandler,
        removeItem: removeItemCartHandler
    };
    

    return ( 
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
     );
}
 
export default CartProvider;