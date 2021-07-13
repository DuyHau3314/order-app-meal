import SingleMeal from "./SingleMeal";
import classes from "./MenuMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const MenuMeals = () => {
  const renderMeals = DUMMY_MEALS.map((meal) => {
    return (
        <li key={meal.id}>
          {" "}
          <SingleMeal meal={meal} />
        </li>
    );
  });

  return (
    <div className={classes["menu-meals"]}>
      <ul> {renderMeals}</ul>
    </div>
  );
};

export default MenuMeals;
