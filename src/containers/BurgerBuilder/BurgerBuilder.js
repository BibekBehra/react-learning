import React, { PureComponent } from "react";
import Aux from "../../hoc/Auxilary.js";
import Burger from "../../component/Burger/Burger.js";
import BuildControls from "../../component/Burger/BuildControls/BuildControls.js";
import AuthContext from "../../context/auth-context.js";
import proptypes from "prop-types";
import Modal from "../../UI/Modal/Modal.js";
import OrderSummmary from "../../component/Burger/OrderSummary/OrderSummary.js";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends PureComponent {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 10,
    purchasable: false,
    showOrderSummary: false
  };
  AddItemHandler = type => {
    //const oldIngredient = this.state.ingredients; // swallow copy
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };
  showOrderSummaryHandler = () => {
    this.setState({ showOrderSummary: true });
  };
  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }
  RemoveItemHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };
  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] > 0;
    }
    return (
      <Aux>
        <AuthContext.Provider
          value={{
            totalPrice: this.state.totalPrice,
            Additem: this.AddItemHandler,
            RemoveItem: this.RemoveItemHandler,
            ordered: this.showOrderSummaryHandler,
            show: this.state.showOrderSummary,
            disabledInfo: disabledInfo,
            purchasable: this.state.purchasable,
            ingredients: this.state.ingredients
          }}
        >
          <Modal>
            <OrderSummmary />
          </Modal>
          <Burger/>
          <BuildControls />
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default BurgerBuilder;