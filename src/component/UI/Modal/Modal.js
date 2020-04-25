import React, { useContext } from "react";
import classes from "./modal.module.css";
 
import BackDrop from "../Backdrop/Backdrop.js";
import Aux from '../../../hoc/Auxilary.js';
const Modal = props => {
  return (
    <Aux>
      <BackDrop
        show={props.show}
        clicked={props.removeOrderSummary}
      ></BackDrop>
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default Modal;
