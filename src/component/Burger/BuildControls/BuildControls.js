import React, { useContext } from "react";
import classes from "../BuildControls/BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl.js";
import AuthContext from "../../../context/auth-context.js";
import Aux from "../../../hoc/Auxilary.js";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];
const BuildControls = props => {
  const authContext = useContext(AuthContext);
  return (
    <Aux>
      <div className={classes.BuildControls}>
        {controls.map((control, index) => {
          return (
            <BuildControl
              key={control.label + index}
              label={control.label}
              added={() => authContext.Additem(control.type)}
              removed={() => authContext.RemoveItem(control.type)}
              isDisabled={authContext.disabledInfo[control.type]} // "Less" button needs to be disabled else when item counte gets into negative forming transformedIngredients insdie Burger.js throws error since ...Array( props.ingredients[igKey] can not create new array for negative vallue.
            />
          );
        })}
        <button
          className={classes.OrderButton}
          disabled={!authContext.purchasable}
          onClick={authContext.showOrderSummary}
        >
          ORDER NOW
        </button>
      </div>
    </Aux>
  );
};

export default React.memo(BuildControls);