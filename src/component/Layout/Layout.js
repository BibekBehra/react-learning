import React, { PureComponent,Fragment } from 'react';
import Aux from "../../hoc/Auxilary.js";

const Layout = (props)=>(
  <Fragment>
<div>Toolbar,SideDrawer,Backdrop </div>
<main>{props.children}</main>
</Fragment>
);

export default Layout;