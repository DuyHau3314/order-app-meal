import classes from './Header.module.css';
import images from '../../assets/meals.jpg';
import Cart from './Cart';
const Header = (props) => {
    return ( 
        <>
        <div className={classes.header}>
            <div className="logo">
                <h2>ReactMeals</h2>
            </div>
           <Cart onOpen={props.onOpen} />
        </div>
        <div className={classes.image}>
            <img src={images} alt="Meal kec" />
        </div>
        </>
     );
}
 
export default Header;