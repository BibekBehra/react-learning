import React, { useContext } from "react";
import Aux from "../../../hoc/Auxilary.js";
import AuthContext from "../../../context/auth-context.js";
import Button from '../../../UI/Button/Button.js';

const OrderSummary = props => {
  const authContext = useContext(AuthContext);
  const ingredientSummary = Object.keys(authContext.ingredients).map(igkey => {
    return (
      <li key={igkey}>
        <span style={{ textTransform: "capitalize" }}>{igkey}</span>::
        {authContext.ingredients[igkey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingredient</p>
      <ul>{ingredientSummary}</ul>
      <p>continue to checkout?</p>

  <p>Total Price</p><span style={{ textTransform: "capitalize" }}>{authContext.totalPrice}</span><p></p>

      <Button btnType="Danger" clicked={authContext.removeOrderSummary}>CANCEL</Button>
      <Button btnType="Success" clicked={authContext.purchaseContinued}>CONTINUE</Button>
    </Aux>
  );
};

export default React.memo(OrderSummary);
