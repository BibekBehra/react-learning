import React, { Component } from "react";
import Aux from "../../hoc/Auxilary.js";
import Burger from "../../component/Burger/Burger.js";
import BuildControls from "../../component/Burger/BuildControls/BuildControls.js";
import AuthContext from "../../context/auth-context.js";
import { object } from "prop-types";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    },
    totalPrice: 10,
    purchasable: false
  };
  AddItemHandler = type => {
    //const oldIngredient = this.state.ingredients; // swallow copy
    const updatedIngredient = { ...this.state.ingredients }; // Deep copy
    const updatedCount = updatedIngredient[type] + 1;
    updatedIngredient[type] = updatedCount;
    const updatedPrice = INGREDIENT_PRICES[type] + this.state.totalPrice;
    this.setState({ ingredients: updatedIngredient, totalPrice: updatedPrice });
  };
  // updatePurchaseState (ingredients) {
  //   const sum = Object.keys( ingredients )
  //       .map( igKey => {
  //           return ingredients[igKey];
  //       } )
  //       .reduce( ( sum, el ) => {
  //           return sum + el;
  //       }, 0 );
  //   this.setState( { purchasable: sum > 0 } );
  // }
  RemoveItemHandler = type => {
    const updatedIngredient = { ...this.state.ingredients }; // Deep copy
    const updatedCount = updatedIngredient[type] - 1;
    updatedIngredient[type] = updatedCount;
    const updatedPrice = INGREDIENT_PRICES[type] - this.state.totalPrice;
    this.setState({ ingredients: updatedIngredient, totalPrice: updatedPrice });
  };
  render() {
    debugger;
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
            disabledInfo: disabledInfo
          }}
        >
          <Burger ingredients={this.state.ingredients} />
          <BuildControls AddItem={this.AddItemHandler} />
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default BurgerBuilder;
