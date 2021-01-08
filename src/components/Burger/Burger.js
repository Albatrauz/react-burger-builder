import classes from './burger.module.css';

import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
  let ingredientsFromArray = Object.keys(props.ingredients)
      .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
          return <BurgerIngredient key={igKey + i} type={igKey} />
        });
      })
      .reduce((arr, el) => {
        return arr.concat(el);
      })
  if (ingredientsFromArray.length === 0) {
    ingredientsFromArray = <p>Please start adding ingredients!</p>
  }


  return (
      <div className={classes.burger}>
        <BurgerIngredient type="bread-top" />
        {ingredientsFromArray}
        <BurgerIngredient type="bread-bottom" />
      </div>
  )
}

export default burger;
