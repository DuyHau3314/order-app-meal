import { useContext, useState, useEffect } from "react";
import CartContext from "../../store/Cart-Context";
import classes from "./Header.module.css";
import LogoCart from "./LogoCart";

const Cart = (props) => {
  const [checkCartItem, setCheckCartItem] = useState(false);
  const cartCtx = useContext(CartContext);
  const cartAmount = cartCtx.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);
  useEffect(() => {
    console.log("useEffect");
    const timer = setTimeout(() => {
      setCheckCartItem(true);
    }, 100);

    return () => {
      console.log("clean useEffect");
      clearTimeout(timer);
      setCheckCartItem(false);
    };
  }, [cartAmount]);

  return (
    <div onClick={props.onOpen} className={`${classes.cart} ${checkCartItem ? classes.bump : ""}`}>
      <span>
        <LogoCart />
      </span>
      <span>
        <h2>Your Cart</h2>
      </span>
      <span className={classes.badge}>{cartAmount}</span>
    </div>
  );
};

export default Cart;
