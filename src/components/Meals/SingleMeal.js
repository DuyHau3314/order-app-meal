import SingleMealForm from './SingleMealForm';
import classes from './SingleMeal.module.css';
const SingleMeal = ({meal}) => {
    return ( 
        <div className={classes['single-meal']}>
            <div className={classes.left}>
                <h3>{meal.name}</h3>
                <h4>{meal.description}</h4>
                <h3 className={classes.price}>{`$${meal.price.toFixed(2)}`}</h3>
            </div>

           <div>
                <SingleMealForm meal={meal} />
           </div>
        </div>
     );
}
 
export default SingleMeal;