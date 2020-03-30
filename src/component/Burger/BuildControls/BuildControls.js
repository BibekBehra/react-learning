import React from "react";
import classes from "../BuildControls/BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl.js";

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }
  ];
const BuildControls = (props) => {
   
 return (
    <div className={classes.BuildControls}>
      {controls.map((control, index) => {
        return <BuildControl
          key={control.label + index} label={control.label}
        />
      })}
    </div>
 );
};

export default BuildControls;
