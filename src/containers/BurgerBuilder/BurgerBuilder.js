import React, { PureComponent } from "react";
import Aux from "../../hoc/Auxilary.js";
import Burger from "../../component/Burger/Burger.js";
import BuildControls from "../../component/Burger/BuildControls/BuildControls.js";
import AuthContext from "../../context/auth-context.js";
import proptypes from "prop-types";
import Modal from "../../component/UI/Modal/Modal.js";
import OrderSummmary from "../../component/Burger/OrderSummary/OrderSummary.js";
import axios from "../../axios-order.js";
import Spinner from "../../component/UI/spinner/Spinner.js";
import withErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends PureComponent {
  state = {
    ingredients: null,
    totalPrice: 10,
    purchasable: false,
    showOrderSummary: false,
    loading: false,
  };

  componentDidMount() {
    axios
    .get("/ingredients.json")
    .then((response) => {
      //console.log(response)
      this.setState({ ingredients: response.data });
    })
    .catch((error) => {
      console.log('Test');
      //this.setState({ error.messa});
    });
  }
  AddItemHandler = (type) => {
    //const oldIngredient = this.state.ingredients; // swallow copy
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
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
  removeOrderSummaryHandler = () => {
    this.setState({ showOrderSummary: false });
  };
  purchaseContinueHandler = () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Bibek Behera",
        address: {
          street: "Bellandur",
          zipCode: "560103",
          country: "India",
        },
        email: "Bibekk.Behera@gmail.com",
      },
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        //console.log(response)
        this.setState({ showOrderSummary: false, loading: false });
      })
      .catch((error) => {
        this.setState({ showOrderSummary: false, loading: false });
      });
  };
  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }
  RemoveItemHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };
  render() {
    debugger;
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] > 0;
    }
    let ordersummary = this.state.loading ? <Spinner /> : <OrderSummmary />;

    return (
      <Aux>
        <AuthContext.Provider
          value={{
            totalPrice: this.state.totalPrice, // Shows total price of added items. Used inside Ordersmmmary as well as BuildControl
            Additem: this.AddItemHandler, //Used inside Buildcontrol to add items in burger like meat,cheese etc which will update CSS
            RemoveItem: this.RemoveItemHandler, //Used inside Buildcontrol to remove items in burger like meat,cheese etc which will update CSS
            showOrderSummary: this.showOrderSummaryHandler, // Tweak showOrderSummary state variable so that accoridnly Modal/order summary is displayed once click on ordernow button
            //removeOrderSummary: this.removeOrderSummaryHandler, // Tweak showOrderSummary state variable so that accoridingly Modal/order summary is hidden once click on cancel button in order summary and on click on backdrop
            purchaseContinued: this.purchaseContinueHandler,
            show: this.state.showOrderSummary, //showOrderSummary state variable which decides to show/hide Modal/Order summary
            disabledInfo: disabledInfo, //To disable Less as per the count of ingredient in ingredient state variable. Disable if <=0
            purchasable: this.state.purchasable, //To enable/disable order now button
            ingredients: this.state.ingredients, //Pass ingredinets state variable to Burger.js to dynamically show burgeringredients
          }}
        >
          <Modal
            show={this.state.showOrderSummary}
            removeOrderSummary={this.removeOrderSummaryHandler}
          >
            {ordersummary}
          </Modal>
          <Burger />
          <BuildControls />
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
