import { useState } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.4,
  meat: 1.2,
  cheese: 0.3,
  bacon: 0.5
}

const initialIngredients= {
  salad: 0,
  meat: 0,
  cheese: 0,
  bacon: 0,
}

const BurgerBuilder= () => {

  const [ingredients, setIngredients] = useState(initialIngredients);
  const [price, setPrice] = useState(4);
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, togglePurchaseMode] = useState(false);

  const purchaseHandler = () => {
    togglePurchaseMode(true);
  }

  const updatePurchaseState = (updatedIngredients) => {
    const sum = Object.values(updatedIngredients)
        .reduce((current, el) => {
          return current + el;
        }, 0);
    setPurchasable(sum > 0 );
  }

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
    updatePurchaseState(updatedIngredients);
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
    updatePurchaseState(updatedIngredients);
  }

  const disabledInfo = {
    ...ingredients
  }

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key]  <= 0;
  }

  return (
    <>
      <Modal show={purchasing}>
        <OrderSummary ingredients={ingredients} />
      </Modal>

      <Burger ingredients={ingredients} />

      <BuildControls
        ingredientAdded={ addIngredientHandler }
        ingredientRemoved={ removeIngredientHandler }
        disabled={disabledInfo}
        price={price}
        purchasable={purchasable}
        ordered={purchaseHandler}
      />
    </>
  );
}

export default BurgerBuilder;
