import React, { useContext } from "react";
import Aux from "../../../hoc/Auxilary.js";
import AuthContext from "../../../context/auth-context.js";

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
    </Aux>
  );
};

export default React.memo(OrderSummary);
