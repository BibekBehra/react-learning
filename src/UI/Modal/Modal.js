import React, { useContext } from "react";
import classes from "./modal.module.css";
import AuthContext from "../../context/auth-context.js";
import BackDrop from "../Backdrop/Backdrop.js";
import Aux from "../../hoc/Auxilary.js";
const Modal = props => {
  const authContext = useContext(AuthContext);
  return (
    <Aux>
      {/* <BackDrop show={authContext.show} clicked></BackDrop> */}
      <div
        className={classes.Modal}
        style={{
          transform: authContext.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: authContext.show ? "1" : "0"
        }}
      >
        >{props.children}
      </div>
    </Aux>
  );
};

export default Modal;
