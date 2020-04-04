import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../../../component/Logo/Logo.js";
import NavigationItems from "../NavigationItems/NavigationItems.js";
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <div>LOGO</div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
