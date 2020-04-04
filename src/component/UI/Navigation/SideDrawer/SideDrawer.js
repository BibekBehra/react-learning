import React from "react";
import Logo from "../../../Logo/Logo.js";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Aux from "../../../../hoc/Auxilary.js";
import BackDrop from "../../../UI/Backdrop/Backdrop.js";
const SideDrawer = () => {
  return (
    <Aux>
      <BackDrop show></BackDrop>
      <div className={classes.SideDrawer}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};
export default SideDrawer;
