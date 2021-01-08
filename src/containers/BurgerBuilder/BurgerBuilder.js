import { useState } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.4,
  meat: 1.2,
  cheese: 0.3,
  bacon: 0.5
}

const BurgerBuilder= () => {
  const initialIngredients= {
    salad: 0,
    meat: 0,
    cheese: 0,
    bacon: 0,
  }

  const [ingredients, setIngredients] = useState(initialIngredients);
  const [price, setPrice] = useState(4);

  const addIngredientHandler = (type) => {
    const oldCount = ingredients[type];
    const newCount = oldCount + 1;

    const updatedIngredients = {
      ...ingredients
    }

    //Add the price of the ingredient to the base price
    const newPrice = price + INGREDIENT_PRICES[type];

    updatedIngredients[type] = newCount;
    setIngredients(updatedIngredients);
    setPrice(newPrice);
  }

  const removeIngredientHandler = (type) => {
    const oldCount = ingredients[type];

    if (oldCount <= 0) {
      return;
    }
    const newCount = oldCount - 1;

    const updatedIngredients = {
      ...ingredients
    }

    /* Deduct price of the ingredient from the total price */
    const newPrice = price - INGREDIENT_PRICES[type];
    updatedIngredients[type] = newCount;
    setIngredients(updatedIngredients);
    setPrice(newPrice);
  }

  const disabledInfo = {
    ...ingredients
  }

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key]  <= 0;
  }

  return (
    <>
      <Burger ingredients={ingredients} />
      <BuildControls
        ingredientAdded={ addIngredientHandler }
        ingredientRemoved={ removeIngredientHandler }
        disabled={disabledInfo}
        price={price}
      />
    </>
  );
}

export default BurgerBuilder;
