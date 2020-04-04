import React, { PureComponent } from "react";
import Aux from "../../hoc/Auxilary.js";
import classes from "./Layout.module.css";
import ToolBar from "../UI/Navigation/Toolbar/Toolbar.js";
import SideDrawer from "../UI/Navigation/SideDrawer/SideDrawer.js";

class Layout extends PureComponent {
  state = {
    showSideDrawer: false,
  };
  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <ToolBar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCloseHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
