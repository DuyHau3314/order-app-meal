import MealDescription from "./MealDescription";
import MenuMeals from './MenuMeals';
import classes from './Meals.module.css';
const Meals = () => {
    return ( 
        <div className={classes.meals}>
            <MealDescription />
            <MenuMeals />
        </div>
     );
}
 
export default Meals;