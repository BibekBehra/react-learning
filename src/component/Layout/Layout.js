import React from "react";
import Aux from "../../hoc/Auxilary.js";
import classes from "./Layout.module.css";
import ToolBar from '../UI/Navigation/Toolbar/Toolbar.js';    
import SideDrawer from "../UI/Navigation/SideDrawer/SideDrawer.js";

const layout = props => (
  <Aux>
    <ToolBar/>
    <SideDrawer/>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default  React.memo(layout);
